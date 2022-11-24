import React, { useState } from "react";
import WhiteArrow from "./WhiteArrow";
import StreamBeansAverage from "./StreamBeansAverage";

function StreamAverageResult({ ...props }) {
  const [beanResult, setBeanResult] = useState(false);

  function calculateEmissions() {
    return parseInt(
      props.receivedData.minutes * props.streamingDataJson.impactNumber
    );
  }

  return (
    <>
      {beanResult && (
        <StreamBeansAverage
          calculatedState={props.calculatedState}
          emissions={calculateEmissions()}
          streamingDataJson={props.streamingDataJson}
          receivedData={props.receivedData}
        />
      )}
      {!beanResult && (
        <>
          <h2>
            YOUR DAILY EMISSIONS FOR {props.receivedData.minutes}MIN OF
            STREAMING ARE {calculateEmissions()}g CO2e A DAY!😌
          </h2>
          <h3>YOU ARE {props.calculatedState} AVERAGE !!</h3>
          <h2>
            The typical European streams 167.4 min/day and emits 153.45g
            CO2e/day.
          </h2>
          <div className="flex_wrapper">
            <button className="no_class" onClick={() => setBeanResult(true)}>
              <WhiteArrow />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default StreamAverageResult;
