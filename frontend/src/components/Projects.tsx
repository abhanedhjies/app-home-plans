"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "@/lib/api";
import { Project } from "@/types/project";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-[#0F2A66]">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition"
            >
              {project.coverImage && (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              )}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0F2A66]">
                  {project.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  📍 {project.location}
                </p>

                <p className="mt-2 font-semibold text-[#0F2A66]">
                  {project.category}
                </p>

                <p className="mt-2 text-green-600">
                  {project.status}
                </p>

                <p className="mt-4 text-slate-500 line-clamp-3">
                  {project.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}