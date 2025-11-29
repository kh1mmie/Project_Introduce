import React from 'react';
import { projects } from '../data/projects'; // ดึงข้อมูลมา
import ProjectCard from './ui/ProjectCard';  // ดึงการ์ดมา

export default function Work() {
  return (
    <section id="work" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Selected <span className="text-Green4">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            นี่คือผลงานบางส่วนที่ผมได้สร้างสรรค์ขึ้น โดยเน้นการออกแบบที่ใช้งานง่ายและโค้ดที่มีประสิทธิภาพ
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}