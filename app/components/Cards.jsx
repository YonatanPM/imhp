"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import Genre from "./Genre";

export default function Cards() {
  const [loadedCards, setLoadedCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const geners = [
    "טיפול",
    "ממשלתי",
    "עזרה עצמית",
    "עמותה",
    "פסיכולוגים",
    "קופת חולים",
    "תרופות",
  ];

  useEffect(() => {
    async function getCards() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/api/cards", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch cards");
        }

        const fetchedCards = await res.json();

        // Sort cards by genre (gener)
        const sortedCards = fetchedCards.cards.sort((a, b) =>
          a.gener.localeCompare(b.gener)
        );
        setLoadedCards(sortedCards);
        setError(null);
      } catch (error) {
        console.error("Error loading cards: ", error);
        setError("Failed to load cards. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    getCards();
  }, []);

  return (
    <div>
      {/* Show loading spinner */}
      {loading && (
        <Image
          src="/loading.gif"
          alt="loading"
          className={styles.loadingImage}
          width={150}
          height={150}
          unoptimized
        />
      )}

      {/* Display error if exists */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Show cards after loading */}
      {!loading && !error && loadedCards.length > 0 && (
        <div className={styles.cardsContainer}>
          {geners.map((gener) => (
            <Genre key={gener} gener={gener} loadedCards={loadedCards} />
          ))}
        </div>
      )}

      {/* Show message if no cards were loaded */}
      {!loading && !error && loadedCards.length === 0 && (
        <p>No cards available.</p>
      )}
    </div>
  );
}
