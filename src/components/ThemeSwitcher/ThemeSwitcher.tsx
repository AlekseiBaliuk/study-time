import React, { useEffect, useState } from "react";

import MoonIcon from "../../../public/icon-moon.svg";
import SunIcon from "../../../public/icon-sun.svg";

import styles from "./ThemeSwitcher.module.scss";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <Image src={ThemeIcon} alt="theme-switcher" className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;