/* eslint-disable react/no-unescaped-entities */
import React from "react";

function SomeForm() {
  return (
    <>
      <div className="some-text">
        <h1>How much CO2 do you daily emit when you are on your socials?🤔</h1>
        <p>
          Type how many minutes you on average spend on your socials. If you
          don't use all of them, mark them as 0.
        </p>
      </div>
      <form className="some-form">
        <div class="form-group">
          <label for="facebook">Facebook:</label>
          <div class="input-group">
            <input
              type="text"
              id="facebook"
              name="facebook"
              inputmode="numeric"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="instagram">Instagram:</label>
          <div class="input-group">
            <input
              type="text"
              id="instagram"
              name="instagram"
              inputmode="numeric"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="snapchat">Snapchat:</label>
          <div class="input-group">
            <input
              type="text"
              id="snapchat"
              name="snapchat"
              inputmode="numeric"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="tiktok">TikTok:</label>
          <div class="input-group">
            <input
              type="text"
              id="tiktok"
              name="tiktok"
              inputmode="numeric"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="reddit">Reddit:</label>
          <div class="input-group">
            <input
              type="text"
              id="reddit"
              name="reddit"
              inputmode="numeric"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="twitter">Twitter:</label>
          <div class="input-group">
            <input
              type="text"
              id="twitter"
              name="twitter"
              inputmode="numeric"
              required
            />
          </div>
        </div>
        <button>CALCULATE</button>
      </form>
    </>
  );
}

export default SomeForm;
