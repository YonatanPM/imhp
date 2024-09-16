"use client";
import styles from "./Card.module.css";

export default function Card({ card }) {
  return (
    <div className={styles.card}>
      <a
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardLink}
      >
        <img src={card.image} alt={card.service} className={styles.cardImage} />
        <h3 className={styles.cardService}>{card.service}</h3>
      </a>
    </div>
  );
}
