import React from "react";
import styles from "../styles/header.module.scss";

function Layout({ children }) {
  return (
    <>
      <header className={styles.sm}>
        <h1 className={styles.hine}>FOOTPRINTZ</h1>
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default Layout;
