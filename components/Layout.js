import React from "react";
import styles from "../styles/header.module.scss";
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
        <div>
          <div>
            <p>💚</p>
          </div>
          <p>Be aware. Make a difference.</p>
        </div>
        <div>
          <Anchor href={"/information"}>SEE MORE INFORMATION</Anchor>
        </div>
        <div>
          <p>Copyright 2022 Anna Lester & Emma Pasquer</p>
          <p>In cooperation with ADVICE</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
