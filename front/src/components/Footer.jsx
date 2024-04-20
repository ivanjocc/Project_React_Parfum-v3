import React from "react";
import styles from "../assets/styles/Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`${styles.footer} d-flex flex-row justify-content-center align-items-center p-20`}
    >
      Copyright © {currentYear} <span className="ml-10">IVAN</span>
    </div>
  );
};

export default Footer;
