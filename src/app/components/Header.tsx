"use client";

import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { menu } from "framer-motion/client";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    console.log("Toggling menu, current state:", menuOpen);
    setMenuOpen(!menuOpen);
  };
  const router = useRouter();

  useEffect(() => {
    interface KeyboardEventWithKey extends KeyboardEvent {
      key: string;
    }

    const handleEsc = (event: KeyboardEventWithKey) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleRedirect = () => {
    router.push("/contact");
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img
            src="/transparent.png"
            width={50}
            height={50}
            alt="Parks Interiors Logo"
          />
          <p>Parks Interiors</p>
        </div>

        {/* Desktop navigation */}
        <nav className={styles.desktopNav}>
          <ul>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/expertise">Expertise</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/latest">Latest</Link>
            </li>
            <Button variant="primary" size="sm" onClick={handleRedirect}>
              Get in touch
            </Button>
          </ul>
        </nav>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="open menu"
        >
          <div className={styles.menuIcon}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
          <button
            className={styles.closeButton}
            onClick={toggleMenu}
            aria-label="close menu"
          >
            <div className={styles.closeIcon}></div>
          </button>

          <nav>
            <ul className={styles.mobileMenuList}>
              <li className={styles.mobileMenuItem} onClick={toggleMenu}>
                <Link href="/work">Work</Link>
              </li>
              <li className={styles.mobileMenuItem} onClick={toggleMenu}>
                <Link href="/expertise">Expertise</Link>
              </li>
              <li className={styles.mobileMenuItem} onClick={toggleMenu}>
                <Link href="/about">About</Link>
              </li>
              <li className={styles.mobileMenuItem} onClick={toggleMenu}>
                <Link href="/latest">Latest</Link>
              </li>
              <Button variant="primary" size="sm" onClick={handleRedirect}>
                Get in touch
              </Button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
