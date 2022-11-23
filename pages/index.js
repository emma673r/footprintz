import Head from "next/head";

export default function Home() {
  return (
    <>
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
  quantity: 0.1,
  equivalence: "beans",
  equivalentNumber: 1900,
};
