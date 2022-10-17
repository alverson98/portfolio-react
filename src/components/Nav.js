import React, { useState } from "react";
import { Link } from "react-router-dom";

//popper for dropdown button
import ElementPopper from "react-element-popper";

function Nav() {
  const [active, setActive] = useState(false);
  const toggleDropDown = () => setActive(!active);

  //Resume button
  const resumeButton = (
    //click changes the state - set active to true
    <button
      className="btn btn-light dropdown-toggle"
      type="button"
      onClick={toggleDropDown}
    >
      Resume
    </button>
  );

  //Resume dropdown option
  const option = (
    <ul className="dropdown">
      <li>
        <a
          className="btn btn-light"
          href={require("../assets/resume.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          View or Download Resume
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <Link className="btn btn-light" to={"/"}>
        About Me
      </Link>
      <Link className="btn btn-light" to={"/projects"}>
        Projects
      </Link>
      <Link className="btn btn-light" to={"/contact"}>
        Contact Me
      </Link>
      <ElementPopper
        element={resumeButton}
        popper={active && option}
        position="bottom-left"
      />
    </nav>
  );
}

export default Nav;
