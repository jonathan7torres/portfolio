import React from "react";
import linkedin from "../../assets/images/linkedIn.png";
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
