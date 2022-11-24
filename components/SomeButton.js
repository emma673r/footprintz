import React from "react";

function SomeButton({ loadStreamingForm }) {
  return (
    <>
      <button
        onClick={() => {
          loadStreamingForm(true);
        }}
      >
        How much social media do I use?
      </button>
    </>
  );
}

export default SomeButton;
