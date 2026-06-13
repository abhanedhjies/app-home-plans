"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { uploadImage } from "@/lib/upload";

export default function AdminProjectForm() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    location: "",
    category: "",
    status: "",
    description: "",
    completionYear: "",
  });

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [uploading, setUploading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (selectedFile) {
        setUploading(true);

        imageUrl = await uploadImage(
          selectedFile,
        );

        setUploading(false);
      }
      const token =
  localStorage.getItem("token");

      await api.post(
  "/projects",
  {
    ...form,
    coverImage: imageUrl,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      alert("Project Added Successfully");

      setForm({
        title: "",
        slug: "",
        location: "",
        category: "",
        status: "",
        description: "",
        completionYear: "",
      });

      setSelectedFile(null);

    } catch (error) {
      console.error(error);
      alert("Failed to add project");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg mt-8 text-slate-900"
    >
      <h2 className="text-3xl font-bold text-[#0F2A66] mb-6">
        Add New Project
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="Project Title"
          className="border border-slate-300 p-3 rounded-lg text-slate-900 bg-white placeholder:text-slate-500"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <input
          placeholder="Slug"
          className="border border-slate-300 p-3 rounded-lg text-slate-900 bg-white placeholder:text-slate-500"
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />

        <input
          placeholder="Location"
          className="border border-slate-300 p-3 rounded-lg text-slate-900 bg-white placeholder:text-slate-500"
          value={form.location}
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
        />

        <input
          placeholder="Category"
          className="border border-slate-300 p-3 rounded-lg text-slate-900 bg-white placeholder:text-slate-500"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        />

        <select
          className="border border-slate-300 p-3 rounded-lg text-slate-900 bg-white"
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
        >
          <option value="">
            Select Status
          </option>

          <option>Planning</option>

          <option>Approval Stage</option>

          <option>Under Construction</option>

          <option>Completed</option>
        </select>

        <input
          placeholder="Completion Year"
          className="border border-slate-300 p-3 rounded-lg text-slate-900 bg-white placeholder:text-slate-500"
          value={form.completionYear}
          onChange={(e) =>
            setForm({
              ...form,
              completionYear: e.target.value,
            })
          }
        />

      </div>

      <textarea
        placeholder="Project Description"
        className="border border-slate-300 p-3 rounded-lg mt-4 w-full text-slate-900 bg-white placeholder:text-slate-500"
        rows={5}
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <div className="mt-6">
        <label className="block mb-2 font-semibold text-[#0F2A66]">
          Cover Image
        </label>

        <input
          type="file"
          accept="image/*"
          className="block w-full border border-slate-300 p-2 rounded-lg"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setSelectedFile(
                e.target.files[0]
              );
            }
          }}
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-[#0F2A66] hover:bg-[#0b1f4d] text-white px-8 py-3 rounded-lg transition-all"
      >
        {uploading
          ? "Uploading..."
          : "Save Project"}
      </button>
    </form>
  );
}