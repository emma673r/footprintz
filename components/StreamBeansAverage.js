import React from "react";
import WhiteArrow from "./WhiteArrow";
import SmallBeans from "./SmallBeans";
import BigBeans from "./BigBeans";
import AverageBeans from "./AverageBeans";
import EndAverage from "./EndAverage";
import { useState, useEffect } from "react";

function StreamBeansAverage({ ...props }) {
  console.log("hello", props.calculatedState);
  const [showResult, setShowResult] = useState(false);
  // const [getEnding, setGetEnding] = useState("");

  // const [ending, setEnding] = useState(["good", "bad", "average"]);

  const carbonData = {
    name: "g CO2e",
    quantity: 1,
    equivalence: "beans",
    equivalentNumber: 19000,
  };

  const avgBeans = {
    min: 2401600,
    max: 3446600,
  };

  function calculateBeans() {
    return props.emissions * carbonData.equivalentNumber;
  }

  // ending 1 = good, ending 2 = average ,ending 3 = bad

  function calculateState() {
    if (calculateBeans() < avgBeans.min) {
      console.log("lille svg bunke");

      // return little svg bean
      return <SmallBeans />;
    } else if (calculateBeans() > avgBeans.max) {
      console.log("store svg bunke");
      // return big svg beans

      return <BigBeans />;
    } else {
      console.log("average svg bunke");
      // return average svg beans

      return <AverageBeans />;
    }
  }

  // useEffect(() => {
  //   function calculateEnding() {
  //     if (calculateBeans() < avgBeans.min) {
  //       return 1;
  //     } else if (calculateBeans() > avgBeans.max) {
  //       return 3;
  //     } else {
  //       return 2;
  //     }
  //   }
  //   setGetEnding(calculateEnding());
  // }, [calculateBeans, avgBeans.min, avgBeans.max]);

  // function calculateEnding() {
  //   if (calculateBeans() < avgBeans.min) {
  //     return 1;
  //   } else if (calculateBeans() > avgBeans.max) {
  //     return 3;
  //   } else {
  //     return 2;
  //   }
  // }

  // setGetEnding(calculateEnding());
  return (
    <>
      {showResult && <EndAverage calculatedState={props.calculatedState} />}
      {!showResult && (
        <>
          {" "}
          <h2>Your daily emissions in beans is {calculateBeans()} beans</h2>
          <div className="flex_wrapper">{calculateState()}</div>
          <h2>
            The average Europeans daily streaming emissions in beans is
            equivalent to 2 915 550 beans
          </h2>
          <div className="flex_wrapper">
            <AverageBeans />
          </div>
          <div className="flex_wrapper">
            <button className="no_class" onClick={() => setShowResult(true)}>
              <WhiteArrow />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default StreamBeansAverage;
