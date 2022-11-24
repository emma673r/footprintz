/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Icecream from "../components/Icecream";
function EndAverage(props) {
  console.log(props);
  return (
    <>
      <p>
        Go get that ice cream, you deserve it! And maybe also learn about new ways to improve your carbon footprint here (INSERT LINK) Good job
        anyways!💚♻️
      </p>
      <Icecream></Icecream>
      <button>Restart</button>
    </>
  );
}

export default EndAverage;
