import { Trash, HandsClapping } from "phosphor-react";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Muglly.png" alt="foto de perfil" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Souza</strong>
              <time
                title="02 de Fevereiro de 2023"
                dateTime="2023-02-05 10:40:02"
              >
                Há 1h atrás
              </time>
            </div>

            <button title="deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <HandsClapping /> Aplaudir <span>05</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
