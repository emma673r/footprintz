import React from "react";

function StreamForm() {
  return (
    <>
      <div className="stream-text">
        <h1>How much CO2 do you daily emit when you stream?🤔</h1>
        <p>Type how many hours on average you spend streaming videos online</p>
      </div>
      <form className="stream-form">
        <div class="form-group">
          <label for="streaming">Hours/day</label>
          <div class="input-group">
            <input type="text" id="streaming" name="streaming" inputmode="numeric" required />
          </div>
          <button>CALCULATE</button>
          <p>We’re talking YouTube, Netflix, Twitch, HBO etc.</p>
        </div>
      </form>
    </>
  );
}

export default StreamForm;
