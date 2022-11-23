/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SingleBean from "./SingleBean";

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
        <div className="flex_hor_wrapper">
          <p>1</p>
          <SingleBean />
          <p>
            <span>=</span> 0.00052g CO2e
          </p>
        </div>
        <div className="flex_hor_wrapper">
          <p>1000</p>
          <SingleBean />
          <p>
            <span>=</span> 5.2g CO2e
          </p>
        </div>
      </div>
      <h3>
        Now that you know <br />
        Let's get started
      </h3>
    </>
  );
}

export default IndexIntroText;
