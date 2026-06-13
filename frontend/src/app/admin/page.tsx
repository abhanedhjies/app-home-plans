"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import AdminProjectForm from "@/components/AdminProjectForm";
import AdminProjectList from "@/components/AdminProjectList";
export default function AdminPage() {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-blue-950">
          APP Home Plans Admin
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/admin/login");
          }}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <AdminProjectForm />

      <AdminProjectList />

    </main>
  );
}