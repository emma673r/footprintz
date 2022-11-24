import React from "react";

function StreamBeansAverage({ ...props }) {
  console.log("hello");
  console.log(props);

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

  function calculateState() {
    if (calculateBeans() < avgBeans.min) {
      console.log("lille svg bunke");
      // return little svg bean
    } else if (calculateBeans() > avgBeans.max) {
      console.log("store svg bunke");
      // return big svg beans
    } else {
      console.log("average svg bunke");
      // return average svg beans
    }
  }

  return (
    <>
      <h2>Your daily emissions in beans is {calculateBeans()} beans</h2>
      <p>{calculateState()}</p>
      <p>The average Europeans daily streaming emissions in beans is equivalent to 2 915 550 beans</p>
      <p>Insert avarage beans SVG</p>
      <div>WHITE ARROW HERE</div>
    </>
  );
}

export default StreamBeansAverage;
