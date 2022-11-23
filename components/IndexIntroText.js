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
          To make all data relateable, we will be using <span>beans</span> as a
          means of comparison
        </p>
      </div>
      <div>
        <div>
          <p>1 x</p>
          <SingleBean />
          <p>= 0.00052g CO2e</p>
        </div>
        <div>
          <p>1000 x</p>
          <SingleBean />
          <p>= 5.2g CO2e</p>
        </div>
      </div>
      <h3>Now that you know, let's get started</h3>
    </>
  );
}

export default IndexIntroText;
