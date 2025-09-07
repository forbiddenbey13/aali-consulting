"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact-us.css";

/** ---------- Types ---------- */
type Step = 1 | 2 | 3;
type FormData = {
  service: string;
  date: string;   // YYYY-MM-DD
  time: string;   // HH:mm
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

/** ---------- Config ---------- */
const SERVICES = [
  "Personal tax",
  "Corporate tax",
  "Strategic Financial Planning",
  "Accounting",
  "Bookkeeping",
  "System Implementation",
];

const START_HOUR = 9, END_HOUR = 17, STEP_MIN = 60, DAYS_TO_SHOW = 30;
const pad = (n:number)=>String(n).padStart(2,"0");
const slots = Array.from({length:(END_HOUR-START_HOUR)*60/STEP_MIN+1},(_,i)=>{
  const h=START_HOUR+Math.floor((i*STEP_MIN)/60), m=(i*STEP_MIN)%60;
  return `${pad(h)}:${pad(m)}`;
});

type DayItem={iso:string; labelTop:string; labelBottom:string};
const dayItems=(n:number)=>Array.from({length:n},(_,i)=>{
  const d=new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate()+i);
  return {
    iso:`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`,
    labelTop:d.toLocaleDateString(undefined,{weekday:"short"}),
    labelBottom:pad(d.getDate()),
  } as DayItem;
});

/** visible date pills by viewport */
const useVisibleDayCount=()=>{
  const [c,setC]=useState(5);
  useEffect(()=>{
    const f=()=>{ const w=window.innerWidth; setC(w>=1280?6:w>=768?5:4); };
    f(); window.addEventListener("resize",f);
    return ()=>window.removeEventListener("resize",f);
  },[]);
  return c;
};

const BookingFlowEmail: React.FC = () => {
  const [step,setStep]=useState<Step>(1);
  const [sending,setSending]=useState(false);
  const [data,setData]=useState<FormData>({
    service:"", date:"", time:"", firstName:"", lastName:"", email:"", phone:""
  });
  const [errors,setErrors]=useState<Partial<Record<keyof FormData,string>>>({});
  const days=useMemo(()=>dayItems(DAYS_TO_SHOW),[]);
  const todayStr=useMemo(()=>{const d=new Date();return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;},[]);
  useEffect(()=>{ if(step===2 && !data.date) setData(d=>({...d,date:todayStr})); },[step,todayStr,data.date]);

  const isToday=useMemo(()=>{
    if(!data.date) return false;
    const n=new Date(), s=new Date(`${data.date}T00:00`);
    return s.getFullYear()===n.getFullYear() && s.getMonth()===n.getMonth() && s.getDate()===n.getDate();
  },[data.date]);

  const visibleSlots=useMemo(()=>{
    if(!isToday) return slots;
    const n=new Date(), hh=n.getHours(), mm=n.getMinutes();
    return slots.filter(t=>{const [H,M]=t.split(":").map(Number); return H>hh || (H===hh && M>=mm);});
  },[isToday]);

  // date pagination
  const visCount=useVisibleDayCount();
  const [start,setStart]=useState(0);
  const maxStart=Math.max(0,days.length-visCount);
  const shownDays=days.slice(start,start+visCount);
  useEffect(()=>{
    if(!data.date) return;
    const idx=days.findIndex(d=>d.iso===data.date);
    if(idx<start) setStart(idx);
    if(idx>=start+visCount) setStart(Math.min(idx,maxStart));
  },[data.date,start,visCount,maxStart,days]);

  const nextFrom1=()=>{ const e:typeof errors={}; if(!data.service) e.service="Please select a service."; setErrors(e); if(!Object.keys(e).length) setStep(2); };
  const nextFrom2=()=>{ const e:typeof errors={}; if(!data.date) e.date="Select a date."; if(!data.time) e.time="Select a time."; else if(!slots.includes(data.time)) e.time="Pick a time between 9 AM and 5 PM (EST)."; if(data.date&&data.time){ const c=new Date(`${data.date}T${data.time}`); if(c<new Date()) e.time="Please choose a future time."; } setErrors(e); if(!Object.keys(e).length) setStep(3); };
  const back=()=>setStep(s=>((s-1) as Step));

  // EmailJS
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  useEffect(() => {
  if (!publicKey) {
    console.error("Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
  } else {
    emailjs.init({ publicKey }); // optional but helps
  }
}, [publicKey]);

  const submit = async (e:React.FormEvent) => {
    e.preventDefault();
    const e2:typeof errors={};
    if(!data.firstName.trim()) e2.firstName="First name is required.";
    if(!data.lastName.trim())  e2.lastName ="Last name is required.";
    if(!data.email.trim())     e2.email    ="Email is required.";
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e2.email="Enter a valid email.";
    if(data.phone && !/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(data.phone)) e2.phone="Enter a valid phone (e.g. 123-456-7890).";
    setErrors(e2);
    if(Object.keys(e2).length) return;

    const params = {
      service: data.service,
      date: data.date,
      time: data.time,
      datetime: `${data.date}T${data.time}`,
      timezone: "EST",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };

    try {
      setSending(true);
      await emailjs.send(serviceId, templateId, params, { publicKey });
      alert("Thanks! Your booking request was sent.");
      // optional: reset
      setStep(1);
      setData({service:"",date:"",time:"",firstName:"",lastName:"",email:"",phone:""});
    } catch (err) {
      console.error(err);
      alert("Email failed to send. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="cf-bg">
      <div className="cf-wrap">
        <h1 className="cf-title">Book Your Free Consultation</h1>
        <p className="cf-subtitle">
          Select a service, choose a time, then enter your details. All appointment times are in <strong>EST</strong>.
        </p>

        {/* Steps */}
        <div className="steps">
          <div className={`step ${step>=1?"active":""}`}>1. Service</div>
          <div className={`step ${step>=2?"active":""}`}>2. Time</div>
          <div className={`step ${step>=3?"active":""}`}>3. Details</div>
        </div>

        {/* Step 1 */}
        {step===1 && (
          <div className="svc-list">
            {SERVICES.map(s=>(
              <button key={s} type="button"
                className={`svc-card ${data.service===s?"selected":""}`}
                onClick={()=>setData(d=>({...d,service:s}))}
                aria-pressed={data.service===s}>
                <div className="svc-title">{s}</div>
                <div className="svc-minutes">45 minutes</div>
              </button>
            ))}
            {errors.service && <p className="cf-error">{errors.service}</p>}
            <div className="steps-nav">
              <button className="cf-btn" onClick={nextFrom1} disabled={!data.service}>Continue</button>
            </div>
          </div>
        )}

        {/* Step 2 (date row above; time grid below) */}
        {step===2 && (
          <div className="slot-section slot-section--stacked">
            <div className="date-grid-wrap">
              <label className="slot-label">Choose a date</label>
              <div className="date-grid-controls">
                <button type="button" className={`date-nav-btn ${start===0?"disabled":""}`}
                        onClick={()=>setStart(s=>Math.max(0,s-visCount))}
                        disabled={start===0}>‹</button>

                <div className="date-grid" role="tablist" aria-label="Pick a date">
                  {days.slice(start,start+visCount).map(d=>{
                    const sel = data.date===d.iso || (!data.date && d.iso===todayStr);
                    return (
                      <button key={d.iso} type="button"
                        className={`date-pill ${sel?"selected":""}`}
                        onClick={()=>setData(prev=>({...prev,date:d.iso}))}
                        role="tab" aria-selected={sel}>
                        <span className="date-pill-top">{d.labelTop}</span>
                        <span className="date-pill-bottom">{d.labelBottom}</span>
                      </button>
                    );
                  })}
                </div>

                <button type="button"
                  className={`date-nav-btn ${start>=maxStart?"disabled":""}`}
                  onClick={()=>setStart(s=>Math.min(maxStart,s+visCount))}
                  disabled={start>=maxStart}>›</button>
              </div>
              {errors.date && <p className="cf-error">{errors.date}</p>}
            </div>

            <div className="slot-times">
              <label className="slot-label">Choose a time (EST)</label>
              <div className="time-grid">
                {slots.map(t=>{
                  const disabled=isToday && !visibleSlots.includes(t);
                  const selected=data.time===t;
                  const [H,M]=t.split(":").map(Number);
                  const h12=((H+11)%12)+1, ampm=H<12?"AM":"PM";
                  const label=`${pad(h12)}:${pad(M)} ${ampm}`;
                  return (
                    <button key={t} type="button"
                      className={`slot-btn ${selected?"selected":""} ${disabled?"disabled":""}`}
                      disabled={disabled}
                      onClick={()=>!disabled && setData(d=>({...d,time:t}))}
                      aria-pressed={selected}>{label}</button>
                  );
                })}
              </div>
              {errors.time && <p className="cf-error">{errors.time}</p>}
              <p className="cf-hint">All appointment times are in <strong>EST</strong>.</p>

              <div className="steps-nav">
                <button className="cf-btn cf-btn-secondary" onClick={()=>setStep(1)} type="button">Back</button>
                <button className="cf-btn" onClick={nextFrom2} type="button" disabled={!data.date||!data.time}>Continue</button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 (EmailJS submit) */}
        {step===3 && (
          <form className="cf-form" onSubmit={submit} noValidate>
            <div className="cf-row cf-row--two">
              <div>
                <input className="cf-input" type="text" placeholder="First name"
                  value={data.firstName} onChange={e=>setData(d=>({...d,firstName:e.target.value}))}/>
                {errors.firstName && <p className="cf-error">{errors.firstName}</p>}
              </div>
              <div>
                <input className="cf-input" type="text" placeholder="Last name"
                  value={data.lastName} onChange={e=>setData(d=>({...d,lastName:e.target.value}))}/>
                {errors.lastName && <p className="cf-error">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <input className="cf-input" type="email" placeholder="Email"
                value={data.email} onChange={e=>setData(d=>({...d,email:e.target.value}))}/>
              {errors.email && <p className="cf-error">{errors.email}</p>}
            </div>
            <div>
              <input className="cf-input" type="tel" placeholder="(123)-456-7890"
                value={data.phone} onChange={e=>setData(d=>({...d,phone:e.target.value}))}/>
              {errors.phone && <p className="cf-error">{errors.phone}</p>}
            </div>

            <div className="steps-nav">
              <button className="cf-btn cf-btn-secondary" onClick={()=>setStep(2)} type="button">Back</button>
              <button className="cf-btn" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingFlowEmail;
