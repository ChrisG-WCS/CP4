// src/app/bibliotheque/page.tsx
import styles from "./bibliotheque.module.css";
import { GameModel } from "../model/GameModel";

const Bibliotheque = async () => {
  const response = await fetch("http://localhost:3000/api/games");
  const result = await response.json();
  const games: GameModel[] = result.games;

  return (
    <section className={styles.library}>
      <h1>Jeux du moment</h1>
      <ul className={styles.games}>
        {games.map((game, i) => {
          return (
            <li key={`game-${i + 1}`} className={styles.gameCard}>
              <article>
                <h2>{game.title}</h2>
                <img src={game.img} alt={game.title} />
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Bibliotheque;
