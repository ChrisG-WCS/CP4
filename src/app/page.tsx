import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.page}>
      <h1>
        Organisez, suivez, explorez : votre univers gaming à portée de main.
      </h1>
      <h2>
        Gérez votre collection de jeux vidéo avec une précision inégalée, suivez
        votre parcours ludique et explorez de nouveaux horizons en toute
        simplicité. Optimisez chaque session de jeu et plongez dans une
        expérience entièrement maîtrisée.
      </h2>
      <Link className={styles.cta} href="/bibliotheque">
        DÉCOUVRIR 🎮{" "}
      </Link>
    </section>
  );
}
