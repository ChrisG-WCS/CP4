import styles from "./bibliotheque.module.css";
import { GameModel } from "../model/game";

const Bibliotheque = () => {
  return (
    <section className={styles.library}>
      <h1>Trending</h1>
      <ul className={styles.games}>
        <li className={styles.gameCard}>
          <article>
            <h2>Clair Obscur</h2>
            <img
              src="https://bigmedia.bpifrance.fr/sites/default/files/styles/bigmedia_article/public/2025-05/Visuel%20article%20%2822%29.png?itok=ASRAkW9e"
              alt="Clair Obscur"
            />
          </article>
        </li>
        <li className={styles.gameCard}>
          <article>
            <h2>Tekken 8</h2>
            <img
              src="https://m2gaming.ca/wp-content/uploads/2024/02/Tekken-8.jpg"
              alt="Tekken 8"
            />
          </article>
        </li>
        <li className={styles.gameCard}>
          <article>
            <h2>Super Smash Bros Brawl</h2>
            <img
              src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/wii_24/SI_Wii_SuperSmashBrosBrawl_image1600w.jpg"
              alt="Smash bros brawl"
            />
          </article>
        </li>
        <li className={styles.gameCard}>
          <article>
            <h2>World of Warcraft: Wrath of the Lich King</h2>
            <img
              src="https://gepig.com/game_cover_460w/450.jpg"
              alt="wow tlk"
            />
          </article>
        </li>
        <li className={styles.gameCard}>
          <article>
            <h2>Sonic The HedgeHog</h2>
            <img
              src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_3ds_download_software_7/SI_3DSDS_3DSonicTheHedgehog_image1600w.jpg"
              alt="Sonic The HedgeHog"
            />
          </article>
        </li>
        <li className={styles.gameCard}>
          <article>
            <h2>Monster Hunter Wilds</h2>
            <img
              src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2246340/a1df989a3b439e15171dc7144c1ce13c32abcae6/capsule_616x353.jpg?t=1753229426"
              alt="Monster Hunter Wilds"
            />
          </article>
        </li>
        <li className={styles.gameCard}>
          <article>
            <h2>StarCraft</h2>
            <img
              src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg"
              alt="StarCraft"
            />
          </article>
        </li>
        <li className={styles.gameCard}>
          <article>
            <h2>Mario Kart World</h2>
            <img
              src="https://leclaireur.fnac.com/wp-content/uploads/2025/06/001-mario-kart-world-01-1256x640.jpg"
              alt="Mario Kart World"
            />
          </article>
        </li>
        <li className={styles.gameCard}>
          <article>
            <h2>Spider-Man Miles Mirales</h2>
            <img
              src="https://antredeluciole.fr/wp-content/uploads/Spiderman-Miles-Morales-PS5-Banner.jpg"
              alt="Spider-Man Miles Mirales"
            />
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Bibliotheque;
