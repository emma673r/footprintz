import React from "react";

import Anchor from "../components/Anchor";
//!! all inputs written like this:
//TODO  <input type="text" pattern="[0-999]+" />

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>FOOTPRINTZ</h1>
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer>
        <div className="flex_wrapper be_aware">
          <div>
            <p>💚</p>
          </div>
          <p>
            <em>Be aware. Make a difference.</em>
          </p>
        </div>
        <div className="flex_wrapper">
          <Anchor href={"/information"}>SEE MORE INFORMATION</Anchor>
        </div>
        <div className="flex_wrapper">
          <p>Copyright 2022 Anna Lester & Emma Pasquer</p>
          <p>In cooperation with ADVICE</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
