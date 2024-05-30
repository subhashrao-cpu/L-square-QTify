import React from "react";

import styles from "./NavBar.module.css";
import { Button } from "../Button/Button";
import Search from "../Search/Search";
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Search/>
      <Button children="GIVE FEEDBACK" />
    </nav>
  );
};

export default NavBar;