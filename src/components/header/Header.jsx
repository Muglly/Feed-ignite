import styles from "./Header.module.css";

console.log(">>>>>>", styles);

export function Header() {
  return (
    <header>
      <strong className={styles.header}>Ignite feed</strong>
    </header>
  );
}
