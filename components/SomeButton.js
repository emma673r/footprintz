import React from "react";
import { useState } from "react";
import SomeForm from "../components/SomeForm";

function SomeButton({ childToParent }) {
  const [showSomeForm, setShowSomeForm] = useState(false);
  return (
    <>
      <button onClick={() => childToParent(true)}>How much social media do I use?</button>
    </>
  );
}

export default SomeButton;
