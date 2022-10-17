import React from "react";

function Footer() {
  return (
    <footer className="d-flex">
      <a
        className="btn btn-light"
        href="https://github.com/alverson98"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a
        className="btn btn-light"
        href="https://www.linkedin.com/in/hannah-alverson-5a7892183"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      {/* Change link to stack overflow */}
      <a
        className="btn btn-light"
        href="https://stackoverflow.com/users/19355584/hannah-alverson"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        Stack Overflow
      </a>
    </footer>
  );
}

export default Footer;
