import styles from "./Header.module.css";

import IgniteLogo from "../../asstes/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Ignite Logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
