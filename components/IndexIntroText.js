/* eslint-disable react/no-unescaped-entities */
import React from "react";

function IndexIntroText() {
  return (
    <>
      <h2>
        How much <span>CO2</span> do you emit when online? 🤔
      </h2>
      <div>
        <p className="white_border">
          To make all data relateable, we will be using <span>beans</span> as a means of comparison
        </p>
      </div>
      <div>
        <p>
          1 (Bean SVG here) <span>=</span> 0.00052g CO2e
        </p>
        <p>
          1000 (Bean SVG here) <span>=</span> 5.2g CO2e
        </p>
      </div>
      <h3>
        Now that you know <br />
        Let's get started
      </h3>
    </>
  );
}

export default IndexIntroText;
