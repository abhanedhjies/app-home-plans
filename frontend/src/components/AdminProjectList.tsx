"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  status: string;
}

export default function AdminProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    const response = await api.get("/projects");
    setProjects(response.data);
  };

  const deleteProject = async (id: number) => {
    const confirmed = confirm(
      "Delete this project?"
    );

    if (!confirmed) return;

    const token =
  localStorage.getItem("token");

await api.delete(
  `/projects/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="bg-white p-8 rounded-xl shadow mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Project Management
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="text-left py-3">
                Title
              </th>

              <th className="text-left py-3">
                Location
              </th>

              <th className="text-left py-3">
                Category
              </th>

              <th className="text-left py-3">
                Status
              </th>

              <th className="text-left py-3">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b"
              >
                <td className="py-4">
                  {project.title}
                </td>

                <td>
                  {project.location}
                </td>

                <td>
                  {project.category}
                </td>

                <td>
                  {project.status}
                </td>

                <td>
                  <button
                    onClick={() =>
                      deleteProject(project.id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}