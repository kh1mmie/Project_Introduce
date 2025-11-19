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
    <div className="justify-center items-center flex h-screen text-white mt-4">

      {/* Container */}
      <div className="relative w-full h-[67%] ">

        {/* Rainbow Border */}
        {/* <div className="animated-rainbow-border p-[2px] rounded-lg 
                      absolute inset-0 z-10 pointer-events-none"
        ></div> */}

        {/* Content */}
        <div className="w-full h-full flex flex-col gap-1 justify-center" >

          {/* Text */}
          <div className="ring rounded-full w-[150px] p-1 text-center mb-7"> INTRODUCING </div>
          <span className=""> HI , I'm </span>
          <h1
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`w-[430px] h-[100px] text-8xl font-bold transition-all duration-300 cursor-default 
              ${ isHovered ? "animated-gradient-text" : "text-white" }`}
          > {user.name}, </h1>
          <p className="text-3xl">I'm a "{user.career}".</p>

        </div>
      </div>
    </div>
  );
}
