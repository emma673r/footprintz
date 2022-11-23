import Head from "next/head";
import IndexIntroText from "../components/IndexIntroText";
import StreamButton from "../components/StreamButton";
import SomeButton from "../components/SomeButton";
import SomeForm from "../components/SomeForm";
import { useState } from "react";

export default function Home() {
  const [showSomeForm, setShowSomeForm] = useState(false);

  const [data, setData] = useState("");

  const childToParent = (data) => {
    console.log(data);
    setData(data);
    setShowSomeForm(data);
  };

  return (
    <>
      {/* {!showSomeForm && <button onClick={() => setShowSomeForm(true)}>How much social media do I use?</button>} */}
      {!showSomeForm && (
        <>
          <IndexIntroText />
          <div className="s-buttons">
            <StreamButton />
            <SomeButton childToParent={childToParent} />
          </div>
        </>
      )}
      {showSomeForm && <SomeForm />}

      <Head>
        <title>FOOTPRINTZ</title>
      </Head>

      {/* <IndexIntroText />
      <div className="s-buttons">
        <StreamButton />
        <SomeButton onClick={() => setShowSomeForm(true)} />
      </div> */}
    </>
  );
}

const beanData = {
  name: "beans",
  quantity: 1,
  equivalence: "g CO2e",
  equivalentNumber: 0.00052,
};

const carbonData = {
  name: "g CO2e",
  quantity: 0.1,
  equivalence: "beans",
  equivalentNumber: 1900,
};
