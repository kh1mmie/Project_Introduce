import React, { useState, useEffect, useRef } from "react";
import Typewriter from "./ui/Typewriter";
import ServiceCard from "./ui/ServiceCard";
import { services } from "../data/services";
import { SiTailwindcss, SiVite } from "react-icons/si"; 
import { VscVscode } from "react-icons/vsc"; 
import { FaFigma, FaReact, FaGithub } from "react-icons/fa";

export default function WhatIDo({ startAnimation }) {
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

  const tools = [
    { name: "Figma", icon: <FaFigma /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Vite", icon: <SiVite /> },
  ];

  return (
    <section 
      id="whatido"
      className="max-w-6xl mx-auto h-screen cursor-default">

      {/* Header */}
      <div className="mb-16 mt-20">
        {/* Green Line */}
        <div className="w-12 h-1 bg-Green4 mb-6 rounded-full"></div>

        <h1 className="text-4xl font-semibold text-Green4 uppercase">
          Services
        </h1>
        <h2 ref={titleRef} className="text-6xl text-white font-bold">
          <Typewriter
            key={replayKey}
            text="What I do"
            speed={150}
            start={startAnimation && isVisible}
          />
        </h2>

        {/* Content */}
        <p className="text-gray-400 text-lg max-w-2xl font-medium mt-6">
          Specializing in building exceptional digital experiences. Currently focused on accessible, human-centered products.
        </p>
      </div>

      {/* Services Card */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Tools I Use Section */}
      <div className="flex flex-col justify-center items-center mt-30">
        <h2 className="text-3xl text-white font-semibold mb-12 relative">
          Tools I Use
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-Green4 rounded-full"></span>
        </h2>

        {/* Grid Tools */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="text-5xl text-white/50 transition-all duration-300 
                              group-hover:text-Green4 group-hover:scale-110 group-hover:-translate-y-2">
                {tool.icon}
              </div>
              
              <div className="text-sm text-white/30 font-medium tracking-wide transition-colors duration-300 group-hover:text-white">
                {tool.name}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
