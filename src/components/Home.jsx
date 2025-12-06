import React, { useState, useEffect, useRef } from "react";
import Typewriter from "./ui/Typewriter";

export default function Home({ onFinish }) {

  const user = {
    name: "Khimmie",
    career: "UI/UX Designer & Frontend Developer",
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [replayKey, setReplayKey] = useState(0);
  
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReplayKey((prevKey) => prevKey + 1);
        }
      },
      { threshold: 0.9 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef} 
      className="mx-20 h-screen text-white cursor-default ">

      <div className="w-full h-full flex flex-col gap-1 justify-center">
        {/* Header */}
        <div className="relative w-[150px] mb-7 text-center">
          <div
            className="animated-rainbow-glow absolute inset-0 
              rounded-full blur-sm "
          ></div>

          <div className="relative ring bg-Noir rounded-full p-1 text-sm ">
            INTRODUCING
          </div>
        </div>

        {/* Green Line */}
        <div className="w-12 h-1 animated-rainbow-glow mb-6 rounded-full"></div>

        {/* Content */}
        <span className=""> HI , I'm </span>
        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`w-fit h-[100px] text-8xl font-bold transition-all duration-300 cursor-pointer
              ${isHovered ? "animated-gradient-text " : "text-white"}`}
        >
          <Typewriter
            key={replayKey}
            text={`${user.name},`}
            speed={150}
            onComplete={onFinish}
            delay={899}
          />
        </h1>
        <p className="text-3xl">I'm a "{user.career}".</p>
      </div>

    </section>
  );
}
