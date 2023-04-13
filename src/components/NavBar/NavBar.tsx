import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Contacts", path: "/contacts" },
  { id: 3, title: "About us", path: "/about" },
];

const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      {navigation.map(({ id, title, path }) => (
        <Link
          key={id}
          className={pathname === path ? styles.active : styles.link}
          href={path}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
