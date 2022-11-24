import React from "react";
import { useRef } from "react";
import { useState } from "react";

import StreamAverageResult from "../components/StreamAverageResult";

function StreamForm() {
  const [receivedData, setReceivedData] = useState({});
  const [calculatedState, setCalculatedState] = useState("");
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

    setReceivedData({
      name: streamData.current[0].id,
      minutes: parseInt(streamData.current[0].value),
    });

    // console.log(data);

    function calculateStreamData(receivedData) {
      console.log(receivedData);
      console.log(streamingDataJson);

      if (receivedData.minutes < streamingDataJson.averageTimeMin - 30) {
        console.log("you are under average");
        return "UNDER";
        // return <StreamGoodResult data={data} streamData={streamingDataJson} />;
      } else if (receivedData.minutes > streamingDataJson.averageTimeMin + 30) {
        console.log("You are above average");
        return "ABOVE";
        // return <StreamBadResult data={data} streamData={streamingDataJson} />;
      } else {
        console.log("You are average");
        return " ";
        // return <StreamAverageResult data={data} streamData={streamingDataJson} />;
      }
    }

    if (receivedData && receivedData.name) {
      setCalculatedState(calculateStreamData(receivedData));
      console.log(calculatedState);

      setStreamDataSent(true);
    }
  }

  return (
    <>
      {streamDataSent ? (
        <StreamAverageResult calculatedState={calculatedState} receivedData={receivedData} streamingDataJson={streamingDataJson} />
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
