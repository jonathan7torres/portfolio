import React from "react";
import linkedin from "../../assets/images/linkedIn.png";
import github from "../../assets/images/github-mark.png";
import "./footer.scss";

export default function Footer() {
  return (
    <section>
      <hr />
      <h5>Footer</h5>
      <a
        href="https://www.linkedin.com/in/jonathanatorres"
        target="_blank"
        rel="noreferrer"
        className="link-linkedin"
      >
        <img src={linkedin} alt="linkedin" className="image-linkedin" />
        Linkedin
      </a>
      <a
        href="https://github.com/jonathan7torres/portfolio"
        target="_blank"
        rel="noreferrer"
        className="link-github"
      >
        <img src={github} alt="github" className="image-github" />
        Source Code
      </a>
      <section className="table">
        <div className="column">
          <p>column 1</p>
        </div>
        <div className="column">
          <p>column 2</p>
        </div>
      </section>
    </section>
  );
}
