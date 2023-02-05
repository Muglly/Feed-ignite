import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Muglly.png"
            alt="foto de de perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Rafael Souza</strong>
            <span>Desenvolvedor Front-end</span>
          </div>
        </div>

        <time title="02 de Fevereiro de 2023" dateTime="2023-02-05 10:40:02">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu coméntario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
