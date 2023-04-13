import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import styles from "./BurgerMenu.module.scss";

const variants = {
  open: {
    backgroundColor: "#fff",
    x: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 500,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delay: 0.5,
      x: { stiffness: 1000 },
    },
  },
};

const navigation = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "Contacts", path: "/contacts" },
  { id: 2, title: "About us", path: "/about" },
];

const Navigation = ({ toggle }: any) => (
  <motion.ul className={styles.list} variants={variants}>
    {navigation.map(({ id, title, path }) => (
      <MenuItem id={id} key={id} title={title} path={path} toggle={toggle} />
    ))}
  </motion.ul>
);

export default Navigation;
