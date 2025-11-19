import { useState, useRef, useEffect, use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// library.add(faAngleDown);

export default function Navbar() {
  const aboutRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menuId) => {
    if (selectedMenu !== menuId) {
      setSelectedMenu(menuId);
    } else {
      setSelectedMenu(null);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setSelectedMenu(null);
      }
    }
    if (selectedMenu !== "about") {
      return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedMenu]);

  return (
    <div
      className="fixed top-7 left-1/2 transform -translate-x-1/2 w-3/4
    flex justify-between items-center gap-4 text-[18px] font-medium z-100"
    >
      <nav
        className=" text-white/40 rounded-full   
      px-10 py-3 flex md:flex-row gap-8 items-center justify-between transition-all duration-300 w-full h-[50px]"
      >
        {/* Logo Web */}
        <img className="w-[50px] h-[50px]" src="/public/img/chihuahua.png" alt=" " />

        {/* Main Menu */}
        <ul className="hidden md:flex gap-8">
          {/* 1-Home */}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("home")}
              className={`${
                selectedMenu === "home"
                  ? "text-Green4 border-b-2 border-Green4 transition-discrete duration-200 scale-110 inline-block "
                  : "hover:text-white hover:scale-110 inline-block transition-transform duration-200"
              }`}
            >
              Home
            </a>
          </li>

          {/* 2-About */}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("What I do")}
              className={`${
                selectedMenu === "What I do"
                  ? "text-Green4 border-b-2 border-Green4 scale-110 inline-block "
                  : "hover:text-white hover:scale-110 inline-block transition-transform duration-200"
              }`}
            >
              What I do
            </a>
          </li>
          {/* <li ref={aboutRef} className="relative justify-items-end">
            <a href="#"
              type="button"
              id="about-button"
              onClick={() => handleMenuClick("about")}
              aria-haspopup="true"
              aria-expanded={selectedMenu === "about"}
              aria-controls="about-menu"
              className={`flex items-center ${
                selectedMenu === "about"
                  ? "text-[#A3FE01] border-b-2 border-[#A3FE01]"
                  : "hover:text-white"
              }`}
            >
              <span className="mr-1.5"> About me </span>

              {/* DropDown about */}
          {/* <FontAwesomeIcon
                icon={faAngleDown}
                className={`${
                  selectedMenu === "about" ? "rotate-180" : "rotate-0"
                } transition-transform duration-200`}
              />
            </a>

            {selectedMenu === "about" && (
              <div
                id="about-menu"
                role="menu"
                className="absolute mt-2 w-35 
              bg-white/7 text-white/40 rounded-md shadow-lg z-10 border-1 border-white/20 "
              >
                <a href="#" className="block px-4 py-2 hover:text-Green4 hover:bg-white/5">
                  Profile me
                </a>
                <a href="#" className="block px-4 py-2 hover:text-Green4 hover:bg-white/5">
                  What I do
                </a>
              </div>
            )}
          </li> */}

          {/* 3-Work */}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("work")}
              className={`${
                selectedMenu === "work"
                  ? "text-[#A3FE01] border-b-2 border-[#A3FE01] scale-110 inline-block "
                  : "hover:text-white hover:scale-110 inline-block transition-transform duration-200"
              }`}
            >
              Work
            </a>
          </li>
        </ul>
      </nav>

      {/* 4-BTN-Contact */}
      <button
        className="bg-white/17 hover:bg-Green4/57 bg-conic-<angle> from-Lavender via- 
        backdrop-blur-md text-white/40 hover:text-white rounded-full shadow-lg border border-white/20 hover:border-Green4/80
        px-10 py-3 flex md:flex-row gap-8 items-center justify-between transition-all duration-300 h-[50px] "
      >
        Contact
      </button>
    </div>
  );
}
