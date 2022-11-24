/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Icecream from "../components/Icecream";
import Book from "../components/Book";
import Medal from "../components/Medal";
function EndAverage(props) {
  console.log(props);

  function refreshPage() {
    window.location.reload(false);
  }

  function endTheSuffering() {
    if (props.calculatedState === "UNDER") {
      console.log("tis good");
      return (
        <>
          <p>Keep up the excellent work! Here's your medal!💚♻️</p>

          <Medal />
        </>
      );
    } else if (props.calculatedState === "ABOVE") {
      console.log("tis bad");
      return (
        <>
          <p>
            Bright side is you get to work on it ! Awareness is the first step.
            Here(link) are some tips and tricks on how to be carbon friendly
            when you're online💚♻️
          </p>

          <Book />
        </>
      );
    } else {
      console.log("tis average");
      return (
        <>
          <p>
            Go get that ice cream, you deserve it! And maybe also learn about
            new ways to improve your carbon footprint here (INSERT LINK) Good
            job anyways!💚♻️
          </p>

          <Icecream />
        </>
      );
    }
  }

  return (
    <>
      {endTheSuffering()}
      <button onClick={refreshPage}>Restart</button>
    </>
  );
}

export default EndAverage;
