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
            <h2>Batman Arkham Knight</h2>
            <img
              src="https://image.api.playstation.com/gs2-sec/acpkgo/prod/CUSA00133_00/374/i_21516ca32977519346e7b5cbf52fcadf722998b0d0a781fbeeea687cd3dca173/i/icon0.png"
              alt="Batman arkham knight"
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
      </ul>
    </section>
  );
};

export default Bibliotheque;
