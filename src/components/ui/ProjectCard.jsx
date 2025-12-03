import React from "react";

export default function ProjectCard({ project }) {
  return (

    <div
      className="group relative rounded-xl bg-white/5 border border-white/10 
                    overflow-hidden transition-all duration-300
                    hover:border-Green4/50 hover:-translate-y-2 "
    >

      {/* 1. Project Image */}
      <div className="h-48 overflow-hidden cursor-pointer">
        <img
          src={project.image}
          className="w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-110"
        />
      </div>

      {/* 2. Content */}
      <div className="p-6 cursor-default">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-Green4 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full 
                bg-white/10 text-Green4 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons (Links) */}
        <div className="flex gap-4">
          <a
            href={project.link}
            className="text-sm font-medium text-white hover:text-Green4 underline underline-offset-4"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            className="text-sm font-medium text-white hover:text-Green4 underline underline-offset-4"
          >
            GitHub Repo
          </a>
        </div>
      </div>

    </div>
  );
}
