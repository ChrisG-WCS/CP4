import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.page}>
      <h1>Welcome to Arkadia</h1>
      <h2>
        Gère ta collection de jeux vidéo facilement. Suis ta progression,
        organise tes jeux, et reste informé des nouveautés. Commence à explorer
        ton univers gaming dès aujourd’hui !
      </h2>
      <Link className={styles.cta} href="/bibliothèque">
        Start now 💿{" "}
      </Link>
    </section>
  );
}
