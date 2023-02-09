import styles from "./Header.module.css";

import IgniteLogo from "../../src/assets/Ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Ignite Logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
