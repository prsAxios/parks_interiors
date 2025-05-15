"use client";
import styles from "../styles/Contact.module.scss";
import Button from "../components/Button";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      () => {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Failes...", error);
        alert("Failed to send email.");
      }
    );
  };

  return (
    <section className={styles.Section}>
      <div className={styles.container}>
        <div className={styles.leftPart}>
          <h1>
            From walls to art and lighting sparks, your style lives on through
            Parks.
          </h1>
        </div>

        <div className={styles.rightPart}>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message*"
              name="message"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
            <Button type="submit" size="md" variant="secondary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
