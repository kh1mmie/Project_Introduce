import React from "react";

export default function Home() {
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

  return (
    <div className="justify-center items-center flex h-screen text-white cursor-default ">

        {/* Content */}
        <div className="w-[90%] h-full flex flex-col gap-1 justify-center">

          <div className="relative w-[150px] mb-7 text-center">
            <div
              className="animated-rainbow-glow absolute inset-0 
              rounded-full blur-sm opacity-75"></div> 

            <div className="relative ring bg-Noir rounded-full p-1 text-sm ">
              INTRODUCING
            </div>

          </div>

          <span className=""> HI , I'm </span>

          <h1
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`w-[430px] h-[100px] text-8xl font-bold transition-all duration-300 
              ${isHovered 
                ? "animated-gradient-text" 
                : "text-white"}`}
          >
            {user.name},
          </h1>

          <p className="text-3xl">I'm a "{user.career}".</p>

        </div>
      </div>
  );
}
