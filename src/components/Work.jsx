import React, { useState, useEffect, useRef } from "react";
import { projects } from "../data/projects"; // ดึงข้อมูลมา
import ProjectCard from "./ui/ProjectCard"; // ดึงการ์ดมา
import Typewriter from "./ui/Typewriter"; // ดึง Typewriter มา

export default function Work({ startAnimation }) {
  // const [isFirstDone, setIsFirstDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReplayKey((prev) => prev + 1);
          setIsVisible(true);
        }
      },
      { threshold: 0.9 } 
    );

    if (titleRef.current) {
      observer.observe(titleRef.current); 
    }

    return () => observer.disconnect(); 
  }, []);

  return (
    <section
      id="work"
      className="py-20 px-4 relative z-10 flex items-center h-screen "
    >
      
      <div className="max-w-6xl mx-auto h-full ">
        {/* Header */}
        <div className="mb-16 cursor-default ">
          <div className="w-12 h-1 bg-Green4 mb-6 rounded-full"></div>

          <h1 className="text-4xl font-semibold text-Green4">PROJECTS</h1>
          <h2
            ref={titleRef} 
            className="text-6xl font-bold mb-6 text-white h-[1.2em]">
            <Typewriter
              key={replayKey}
              text="Selected Works"
              speed={150}
              start={startAnimation && isVisible}
              // onComplete={() => setIsFirstDone(true)}
            />
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            natus corrupti officia commodi minus modi inventore quisquam
            explicabo neque eius placeat perferendis voluptas consequatur, nobis
            quis doloribus. Odio, velit dolorum!
          </p>
        </div>

        {/* Project Grid */}
        <div className="flex flex-nowrap gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

    </section>
  );
}
