'use client';
import React, { useEffect, useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';

type Props = {
  amount: number;
  attendees: { name: string; email: string }[];
  eventId: string;
  eventName: string;
  onSuccess: () => void; // parent should persist to DB + send emails
};

export default function CheckoutForm({
  amount,
  attendees,
  eventId,
  eventName,
  onSuccess,
}: Props) {
  const stripe = useStripe();
  const elements = useElements();

  // Prefill from first attendee if provided
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // optional

  useEffect(() => {
    if (attendees?.length) {
      setFullName(attendees[0]?.name ?? '');
      setEmail(attendees[0]?.email ?? '');
    }
  }, [attendees]);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const validate = () => {
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(undefined);

    if (!stripe || !elements) {
      setErrorMessage('Stripe not loaded');
      return;
    }
    if (!validate()) return;

    setLoading(true);

    // Ask Elements to validate/save any embedded fields (e.g., Address)
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    // Confirm the payment without redirecting away
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Attach billing details you collected above
        payment_method_data: {
          billing_details: {
            name: fullName,
            email,
            phone: phone || undefined,
          },
        },
        // If 3DS is needed and a redirect is unavoidable, Stripe will use this:
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      setErrorMessage(error.message || 'Payment failed.');
      setLoading(false);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      // Hand control to parent to save to Firestore and send email.
      // Parent already knows eventId/eventName/attendees/amount, but if you
      // prefer, you can also lift fullName/email/phone to parent via its own state.
      onSuccess();
    } else {
      setErrorMessage('Payment not completed.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md">
      {/* Your details */}
      <div className="grid gap-3 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Jane Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Phone <span className="text-gray-500">(optional)</span>
          </label>
          <input
            type="tel"
            className="w-full border rounded px-3 py-2"
            placeholder="(123) 456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Stripe Payment Element */}
      <PaymentElement />

      {errorMessage && (
        <p className="text-red-600 text-sm mt-2" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full mt-4 bg-black text-white py-3 rounded font-semibold disabled:opacity-50"
      >
        {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </button>

      {/* Optional context for the user */}
      <p className="text-xs text-gray-500 mt-2">
        You’ll be charged <strong>${amount.toFixed(2)}</strong> for{' '}
        <span className="font-medium">{eventName}</span>.
      </p>
    </form>
  );
}
