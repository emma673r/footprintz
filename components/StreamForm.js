import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
// import StreamGoodResult from "../components/StreamGoodResult";

function StreamForm() {
  const [streamDataSent, setStreamDataSent] = useState(false);
  const streamData = useRef(null);

  const streamingDataJson = {
    application: "Streaming",
    impactNewsfeedMin: "0.92 g CO2e/min",
    impactNumber: 0.92,
    impactMeasurement: "g CO2e/min",
    averageTimeMin: 167.4,
  };

  function submitStreamForm(e) {
    e.preventDefault();

    const data = {
      name: streamData.current[0].id,
      minutes: streamData.current[0].value,
    };
    data.minutes = parseInt(data.minutes);

    // console.log(data);
    function calculateStreamData(data) {
      console.log(data);
      console.log(streamingDataJson);

      if (data.minutes < streamingDataJson.averageTimeMin - 30) {
        console.log("you are under average");
        // return <StreamGoodResult data={data} />;
      } else if (data.minutes > streamingDataJson.averageTimeMin + 30) {
        console.log("You are above average");
      } else {
        console.log("You are average");
      }
    }

    if (data && data.name) {
      setStreamDataSent(true);
      calculateStreamData(data);
    }
  }

  return (
    <>
      {streamDataSent ? (
        <p>Yes</p>
      ) : (
        <>
          <div className="stream-text">
            <h1>How much CO2 do you daily emit when you stream?🤔</h1>
            <p>Type how many minutes on average you spend streaming videos online</p>
          </div>
          <form onSubmit={submitStreamForm} ref={streamData} className="stream-form">
            <div className="form-group">
              <div className="input-group">
                <input type="text" id="streaming" name="streaming" inputMode="numeric" pattern="[0-999]+" required />{" "}
                <label htmlFor="streaming">min/day</label>
              </div>
              <button>CALCULATE</button>
              <p>We’re talking YouTube, Netflix, Twitch, HBO etc.</p>
            </div>
          </form>
        </>
      )}{" "}
    </>
  );
}

export default StreamForm;
