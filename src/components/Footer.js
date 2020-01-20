import React from "react";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCoffee, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h2>Connect With Me:</h2>
      </div>
      <Contact />
      <div className="made">
        <h2>
          <FontAwesomeIcon icon={faLaptopCode} /> with{" "}
          <FontAwesomeIcon icon={faCoffee} /> on{" "}
          <FontAwesomeIcon icon={faCodeBranch} />{" "}
        </h2>
      </div>
    </div>
  );
}

export default Footer;
