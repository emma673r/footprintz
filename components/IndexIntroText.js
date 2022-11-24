/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SingleBean from "../components/SingleBean";
function IndexIntroText() {
  return (
    <>
      <h2>How much CO2 do you emit when online?🤔</h2>
      <div>
        <p>
          To make all data relateable, we will be using <span>beans</span> as a
          means of comparison
        </p>
      </div>
      <div>
        <div>
          <p>1 x </p>
          <SingleBean></SingleBean>
          <p>
            <span>=</span>
            0.00052g CO2e
          </p>
        </div>
        <div>
          <p>1000 x </p>
          <SingleBean></SingleBean>
          <p>
            <span>=</span>
            5.2g CO2e
          </p>
        </div>
      </div>
      <h3>Now that you know, let's get started</h3>
    </>
  );
}

export default IndexIntroText;
