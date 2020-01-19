import React from "react";
const mcsa = require("../images/logos/mcsa.png");
const mcsd = require("../images/logos/mcsd.png");
const awsAssociate = require("../images/logos/aws.png");

function Certificate() {
    return (
    <div className="about">
      <h1>Certifications</h1>
      
      <a
        title="MCSA"
        className="fa"
        href="https://www.youracclaim.com/badges/46656c11-5244-485c-a351-4ab0b9f51f1e/public_url"
        target="new"
      >
        <img src={mcsa} alt="mcsa"/>
      </a>
      
      <a
        title="MCSD"
        className="fa2"
        href="https://www.youracclaim.com/badges/fb7e0fbc-69d6-4950-a3a1-09248156a932/public_url"
        target="new"
      >
          <img src={mcsd} alt="mcsd"/>
      </a>
      
      
      <a
        title="AWS"
        className="fa"
        href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-10-19&ci=AWS01108628"
        target="new"
      >
          <img src={awsAssociate} alt="aws"/>
      </a>
      
    </div>

      );
  }

  export default Certificate;