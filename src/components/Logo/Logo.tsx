import React from "react";
import Image from "next/image";
import LogoImg from "public/logo.png";
import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoImg} alt="logo" width={80} placeholder="blur" />
    </Link>
  );
};

export default Logo;
