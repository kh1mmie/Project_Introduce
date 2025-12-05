import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import AbstractBackground from "./components/ui/AbstractBackground";
import Home from "./components/Home";
import Work from "./components/Work";
import WhatIDo from "./components/WhatIDo";

export default function App() {
  const [homeFinished, setHomeFinished] = useState(false);

  return (
    <div className="relative isolate bg-Noir overflow-hidden font-mono ">
      <AbstractBackground />

      {/* <div className="snap-y snap-mandatory h-screen overflow-y-scroll  "> */}
      <div className="w-3/4 mx-auto ">
        <Navbar />
        <Home onFinish={() => setHomeFinished(true)} />
        <WhatIDo />
        <Work startAnimation={homeFinished} />
        {/* <div className="snap-normal snap-center "> */}
        {/* </div> */}
      </div>
      {/* </div>  */}
    </div>
  );
}
