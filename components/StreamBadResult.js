import React from "react";
import WhiteArrow from "./WhiteArrow";

function StreamBadResult() {
  return (
    <>
      <h2>OH NO! YOUR DAILY EMISSIONS ARE XXg CO2e A DAY!😫</h2>
      <p>You are over average!</p>
      <p>
        The typical European streams 167.4 min/day and emits 153.45g CO2e/day.
      </p>
      <WhiteArrow></WhiteArrow>
    </>
  );
}

export default StreamBadResult;
