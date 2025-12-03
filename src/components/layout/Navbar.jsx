import { useState, useRef, useEffect } from "react";

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
          {/* 1-About */}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("about")}
              className={`nav-link ${
                selectedMenu === "about"
                  ? "nav-active"
                  : "hover:text-white hover:scale-110 inline-block transition-transform duration-200"
              }`}
            >
              About Me
            </a>
          </li>

          {/* 2-Work */}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("work")}
              className={`nav-link ${
                selectedMenu === "work"
                  ? "nav-active "
                  : "hover:text-white hover:scale-110 inline-block transition-transform duration-200"
              }`}
            >
              Portfolio
            </a>
          </li>

          {/* 3-What I Do */}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("What I Do")}
              className={`nav-link ${
                selectedMenu === "What I Do"
                  ? "nav-active "
                  : "hover:text-white hover:scale-110 inline-block transition-transform duration-200"
              }`}
            >
              What I Do?
            </a>
          </li>
        </ul>
      </nav>

      {/* 4-BTN-Contact */}
      <button
        className="bg-white/17 hover:bg-Green4/57  text-white/40 hover:text-white hover:scale-110
        rounded-full shadow-lg border border-white/20 hover:border-Green4/80
        px-8 py-2.5 flex items-center justify-between transition-all duration-300  
        cursor-pointer "
      >
        Contact
      </button>
    </div>
  );
}
