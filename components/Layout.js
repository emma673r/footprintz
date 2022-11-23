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
      <footer></footer>
    </>
  );
}

export default Layout;
