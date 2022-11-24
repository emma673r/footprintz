import Head from "next/head";
import IndexIntroText from "../components/IndexIntroText";
import StreamButton from "../components/StreamButton";
import SomeButton from "../components/SomeButton";
import SomeForm from "../components/SomeForm";
import StreamForm from "../components/StreamForm";
import { useState } from "react";

export default function Home() {
  const [showSomeForm, setShowSomeForm] = useState(false);
  const [showStreamForm, setShowStreamForm] = useState(false);

  // ** state is the data we get from child, which is (true) in this case (because of onclick action in child)
  const loadSomeForm = (state) => {
    setShowSomeForm(state);
  };

  const loadStreamForm = (state) => {
    setShowStreamForm(state);
  };

  return (
    <>
      {/* if showSomeForm false -> show the basic index intro components */}

      {!showSomeForm && !showStreamForm && (
        <>
          <IndexIntroText />
          <div className="s-buttons">
            <StreamButton loadStreamForm={loadStreamForm} />
            <SomeButton loadSomeForm={loadSomeForm} />
          </div>
        </>
      )}

      {/* if showSomeForm = true -> show only the some form */}
      {/* if showStreamForm = true -> show only the stream form */}

      {showSomeForm && <SomeForm />}
      {showStreamForm && <StreamForm />}

      <Head>
        <title>FOOTPRINTZ</title>
      </Head>
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
  quantity: 1,
  equivalence: "beans",
  equivalentNumber: 19000,
};
