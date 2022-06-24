import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = function () {
    setIsMenuOpen(!isMenuOpen);
    setNavOutput("");
  };
  const NAV_OBJ = {
    About:
      "Lab Manual is a multinational collaborative React-based Progressive Web App created by students from Limerick University and Fanshawe College. The app facilitates data access for over 600 laboratory tests, providing critical information from the convenience of any device.",
    Contact: "info@jeanluc.dev",
    Contributors: "Jean-Luc, Spencer, Bilal",
  };
  const [navOutput, setNavOutput] = useState("");

  return (
    <div
      id="header"
      className={`w-screen  header md:2/4 dark ${
        isMenuOpen ? "menu-opened" : ""
      } `}
    >
      <div className=" burger-container" onClick={() => toggleMenuOpen()}>
        <div id="burger">
          <div className="bar topBar"></div>
          <div className="bar btmBar"></div>
        </div>
      </div>

      <ul className=" menu">
        <li className="menu-item"></li>
        <li className="menu-item">
          <button
            onClick={() => setNavOutput(NAV_OBJ["About"])}
            className="w-full text-xl text-skin-main glow-on-hover "
          >
            About
          </button>
        </li>
        <li className="menu-item">
          <button
            onClick={() => setNavOutput(NAV_OBJ["Contributors"])}
            className="w-full text-xl text-skin-main glow-on-hover"
          >
            Contributors
          </button>
        </li>
        <li className="menu-item">
          <button
            onClick={() => setNavOutput(NAV_OBJ["Contact"])}
            className="w-full text-xl glow-on-hover text-skin-main"
          >
            Contact
          </button>
        </li>
        {navOutput !== null && (
          <div>
            <div className="mt-2 ml-1">
              <p className="text-center text-skin-main">
                {Object.values(navOutput)}
              </p>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
