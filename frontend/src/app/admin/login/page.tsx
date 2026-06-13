"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3001/auth/login",
        {
          username,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.access_token
      );

      router.push("/admin");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-xl shadow-lg w-[400px]"
      >
        <h1 className="text-3xl font-bold text-blue-950 mb-6">
          APP Home Plans
        </h1>

        <p className="mb-6 text-gray-600">
          Admin Login
        </p>

        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded w-full mb-4 text-black"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded w-full mb-6 text-black"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-950 text-white py-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}