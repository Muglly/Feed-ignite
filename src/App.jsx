import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./styles/global.css";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
