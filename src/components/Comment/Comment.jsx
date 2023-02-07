import { Avatar } from "../Avatar/Avatar";
import { Trash, HandsClapping } from "phosphor-react";

import styles from "./Comment.module.css";
import { useState } from "react";

export function Comment({ comment, onDeleteComment }) {
  const [clappingCount, setClappingCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  function handleClappingCount() {
    setClappingCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Muglly.png" />

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

            <button onClick={handleDeleteComment} title="deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleClappingCount}>
            <HandsClapping /> Aplaudir <span>{clappingCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
