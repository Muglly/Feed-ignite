import { Header } from "./components/header/header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./styles/global.css";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>post</main>
      </div>
    </>
  );
}

export default App;
