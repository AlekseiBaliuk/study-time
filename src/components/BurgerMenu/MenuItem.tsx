import React from "react";
import { motion } from "framer-motion";
import styles from "./BurgerMenu.module.scss";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ id, title, path, toggle }: any) => {
  const style = { border: `2px solid ${colors[id]}` };
  return (
    <motion.li
      onClick={toggle}
      className={styles.item}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconPlaceholder} style={style} />
      <div className={styles.textPlaceholder} style={style}>
        <Link href={path}>{title}</Link>
      </div>
    </motion.li>
  );
};

export default MenuItem;
