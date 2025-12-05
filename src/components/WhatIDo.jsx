import React, { useState, useEffect, useRef } from "react";
import Typewriter from "./ui/Typewriter";

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

  return (
    <div className="max-w-6xl mx-auto h-screen cursor-default">

      <div className="w-12 h-1 bg-Green4 mb-6 rounded-full"></div>
      <div className="flex flex-col-2 justify-between w-full mb-16">
        <h1
          ref={titleRef}
          className="text-6xl text-white font-bold"
        >
          <Typewriter
            key={replayKey}
            text="What I do"
            speed={150}
            start={startAnimation && isVisible}
          />
          <p className="text-gray-400 text-lg max-w-2xl font-medium mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            exercitationem, at quis praesentium officia harum incidunt porro
            iusto obcaecati quas, accusamus et maiores id earum dicta, vero
            ipsum facere! Nulla!
          </p>
        </h1>

        <div
          className="border border-white/10 py-6 px-4 text-white/70 
                rounded-lg w-1/3 flex flex-col justify-center items-center"
        >
          <div div className="uppercase">
            wed design
          </div>
          <div className="">UX/UI design </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-4xl text-white font-semibold">
          weasdaaaaaasdasd
        </div>
        <div className="">sadsadasdas</div>
      </div>
    </div>
  );
}
