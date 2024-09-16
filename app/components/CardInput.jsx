"use client";
import { useState } from "react";
import styles from "./CardInput.module.css";

export default function CardInput() {
  const [formData, setFormData] = useState({
    service: "",
    gener: "",
    url: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const service = formData.service;
    const gener = formData.gener;
    const url = formData.url;
    const image = formData.image;

    try {
      const res = await fetch("http://localhost:3000/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service,
          gener,
          url,
          image,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.log("cards submission failed.");
      }
    } catch (error) {
      console.log("Error cards submission: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="service">service</label>
        <input
          className={styles.label}
          type="text"
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="gener">gener:</label>
        <input
          type="text"
          id="gener"
          name="gener"
          value={formData.gener}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="url">url</label>
        <input
          className={styles.label}
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="image">image:</label>
        <input
          className={styles.label}
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
