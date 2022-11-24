import React from "react";

function SomeButton({ loadSomeForm }) {
  return (
    <>
      <button onClick={() => loadSomeForm(true)}>How much social media do I use?</button>
    </>
  );
}

export default SomeButton;
