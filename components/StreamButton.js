import React from "react";

function StreamButton({ loadStreamForm }) {
  return (
    <>
      <button
        onClick={() => {
          loadStreamForm(true);
        }}
      >
        How much do I stream?
      </button>
    </>
  );
}

export default StreamButton;
