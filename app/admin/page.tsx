"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import AdminLogin from "./_components/AdminLogin";
import AdminDashboard from "./_components/AdminDashboard";
import { useRouter } from "next/navigation";

export default function AdminPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!user) {
        return <AdminLogin />;
    }

    return <AdminDashboard />;
}
