"use client";
import styles from "./Genre.module.css";
import Card from "./Card";

export default function Genre({ gener, loadedCards }) {
  return (
    <div className={styles.genersSection}>
      <h2 className={styles.generTitle}>{gener}</h2>
      {loadedCards
        .filter((card) => card.gener === gener)
        .map((card) => (
          <Card key={card._id} card={card} />
        ))}
    </div>
  );
}
