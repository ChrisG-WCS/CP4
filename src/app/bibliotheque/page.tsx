"use client";

import { useState, useEffect } from "react";
import styles from "./bibliotheque.module.css";
import { GameModel } from "../models/GameModel";
import Link from "next/link";
import DeleteButton from "@/app/components/DeleteGame";

const Bibliotheque = () => {
  const [games, setGames] = useState<GameModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGames = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/api/games");
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      const result = await response.json();
      setGames(result.games || []);
    } catch (e: any) {
      console.error("Erreur lors de la récupération des jeux:", e);
      setError(`Impossible de charger les jeux: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleGameDeleted = () => {
    fetchGames();
  };

  if (loading) {
    return (
      <section className={styles.library}>
        <h1>Jeux du moment</h1>
        <p>Chargement des jeux...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.library}>
        <h1>Jeux du moment</h1>
        <p style={{ color: "red" }}>{error}</p>
      </section>
    );
  }

  return (
    <section className={styles.library}>
      <h1>Jeux du moment</h1>
      <Link className={styles.cta} href="/pixel_lab">
        PIXEL LAB 🔧{" "}
      </Link>
      <ul className={styles.games}>
        {games.length === 0 ? (
          <p>Aucun jeu trouvé pour le moment. Créez-en un !</p>
        ) : (
          games.map((game) => (
            <li key={`game-${game.id}`} className={styles.gameCard}>
              <article>
                <h2>{game.title}</h2>
                <img src={game.img} alt={game.title} />

                <DeleteButton
                  gameId={game.id}
                  onDeleteSuccess={handleGameDeleted}
                />
              </article>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default Bibliotheque;
