import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import AbstractBackground from "./components/ui/AbstractBackground";
import Work from "./components/Work";

export default function App() {
  return (
    // <div className="bg-MidnightPurple3 ">
    <div className="relative isolate min-h-screen bg-Noir overflow-hidden ">
      <AbstractBackground />
      <div className="w-3/4 mx-auto">
        <Navbar />
        <Home />
        <Work />
      </div>
    </div>
  );
}
