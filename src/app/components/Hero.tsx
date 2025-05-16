"use client";

import React from "react";
import { useEffect, useRef } from "react";
import Header from "./Header";
import styles from "../styles/Hero.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const el = videoRef.current;

    gsap.fromTo(
      el,
      {
        width: "90%",
        scale: 0.9,
      },
      {
        width: "100%",
        scale: 1,
        duration: 8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "30%",
          scrub: 1,
        },
      }
    );
  }, []);

  const videoRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.textContainer}>
          <p>Design and build what others only imagine</p>
        </div>
        <div className={styles.videoContainer} ref={videoRef}>
          <video className={styles.video} autoPlay muted loop draggable="false" >
            <source src="/videos/Hero.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
