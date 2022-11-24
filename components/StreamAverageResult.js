import React, { useState } from "react";
import WhiteArrow from "./WhiteArrow";
import StreamBeansAverage from "./StreamBeansAverage";

function StreamAverageResult({ ...props }) {
  const [beanResult, setBeanResult] = useState(false);

  const loadBeanResult = (state) => {
    setBeanResult(state);
  };

  function calculateEmissions() {
    return parseInt(props.receivedData.minutes * props.streamingDataJson.impactNumber);
  }

  return (
    <>
      {beanResult && (
        <StreamBeansAverage emissions={calculateEmissions()} streamingDataJson={props.streamingDataJson} receivedData={props.receivedData} />
      )}
      {!beanResult && (
        <>
          <h2>
            YOUR DAILY EMISSIONS FOR {props.receivedData.minutes}MIN OF STREAMING ARE {calculateEmissions()}g CO2e A DAY!😌
          </h2>
          <p>YOU ARE {props.calculatedState} AVERAGE</p>
          <p>The typical European streams 167.4 min/day and emits 153.45g CO2e/day.</p>
          <WhiteArrow loadBeanResult={loadBeanResult} />
        </>
      )}
    </>
  );
}

export default StreamAverageResult;
