import React from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import BurgerMenu  from "../BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Logo />
          <NavBar />
          <BurgerMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
