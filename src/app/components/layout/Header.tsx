import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <img src="/Arkadia.png" alt="Logo" />
        </Link>
        <Link href="/Support">support</Link>
      </nav>
    </header>
  );
};

export default Header;
