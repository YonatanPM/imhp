"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css"; // Assume you're using CSS Modules for styling
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="logo"
            className={styles.logoImage}
            width={100}
            height={100}
          />
          <h1>פורטל בריאות הנפש הישראלי</h1>
        </Link>
      </div>

      {/* Hamburger icon, hidden when the menu is open */}
      <div
        className={`${styles.hamburger} ${
          isMenuOpen ? styles.hamburgerHidden : ""
        }`}
        onClick={toggleMenu}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>

      {/* Navigation links, open or closed based on the state */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul>
          <li>
            <Link href="./About" onClick={toggleMenu}>
              עלינו
            </Link>
          </li>
          <li>
            <Link href="./Contact" onClick={toggleMenu}>
              צור קשר
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
