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
    <button onClick={toggleDropDown}>Resume</button>
  );

  //Resume dropdown option
  const option = (
    <ul className="dropdown">
      <li href="#">View or Download Resume</li>
    </ul>
  );

  return (
    <nav class="navbar">
      <Link className="btn" to={"/"}>
        About Me
      </Link>
      <Link className="btn" to={"/projects"}>
        Projects
      </Link>
      <Link className="btn" to={"/contact"}>
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
