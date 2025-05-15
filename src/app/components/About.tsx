"use client";
import style from "../styles/About.module.scss";
import Button from "./Button";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

const About = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const split = new SplitText(marqueeRef.current, {
      type: "chars",
    });

    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1,
      repeat: -1,
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section className={style.about}>
      <div className={style.textContainer}>
        <div ref={marqueeRef}>
          <p>
            We design homes with love and care.
            <br />
            Every corner reflects your family’s warmth.
            <br />
            Made for Indian hearts and homes.
            <br />
          </p>
        </div>

        <Button size="md">See our work</Button>
      </div>
    </section>
  );
};

export default About;
