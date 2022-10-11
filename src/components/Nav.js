import React, { useState } from "react";

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
      <button class="btn" type="button" href="">
        About Me
      </button>
      <button class="btn" type="button" href="">
        Projects
      </button>
      <button class="btn" type="button" href="">
        Projects
      </button>
      <ElementPopper
        element={resumeButton}
        popper={active && option}
        position="bottom-left"
      />
    </nav>
  );
}

export default Nav;
