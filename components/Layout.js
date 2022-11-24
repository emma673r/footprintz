import React from "react";
import styles from "../styles/header.module.scss";

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
          <p>💚 - Be aware. Make a difference.</p>
        </div>
        <div>
          <p>(LINK) SEE MORE INFORMATION</p>
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
