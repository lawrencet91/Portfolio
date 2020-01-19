
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faJs,
  faAngular,
  faAws
} from "@fortawesome/free-brands-svg-icons";
const lambda = require("../images/logos/aws-lambda.svg");
const gateway = require("../images/logos/aws-api-gateway.svg");
const csharp = require("../images/logos/csharp-original.svg");

function About() {
  return (
    <div id="aboutMe" className="about ">
      <h1>About Me</h1>
      <p>
        A dedicated and energetic software developer with ability to contribute to the delivery of quality software solution. 
        Possess strong ability to develop application using C#, JavaScript, SQL and DevOps. 
      </p>
      <div className="tech">
        <FontAwesomeIcon icon={faNode} color="#7FBD2F" />
        <FontAwesomeIcon icon={faAws} color="#FD8606" />
        <img src={csharp} alt="C#" />
        <img src={gateway} alt="AWS API Gateway" />
        <img src={lambda} alt="AWS Lambda" />
        <FontAwesomeIcon icon={faJs} color="#ffd43b" />
        <FontAwesomeIcon icon={faAngular} color="#D30025" />
        <FontAwesomeIcon icon={faReact} color="#61dbfb" />
      </div>
    </div>
  );
}

export default About;