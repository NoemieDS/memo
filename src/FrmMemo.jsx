import "./FrmMemo.scss";
import Memo from "./Memo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FrmMemo({ memos, setMemos }) {

  const [texte, setTexte] = useState("");


  /**
   * Fonction pour créer et ajouter un mémo au tableau des mémos.
   * @param {Object} memo - La tache à se rappeler.
   * @param {string} memo.id - Le id du mémo.
   * @param {string} memo.date - La date de création.
   * @param {string} memo.texte - La tâche entrée par l'utilisateur.
   * @param {boolean} memo.complete - Si la tâche est complétée ou non (false par défaut).
   */
  function ajouterMemo(evt) {
    /* On empêche la page de rafraichir */
    evt.preventDefault();

    /* COMMENT VIDER LA BOITE DE TEXTE */

    /* Un mémo */
    let timestamp = new Date().getTime();
    let id = crypto.randomUUID();
    let memo = {
      id: id,
      date: timestamp,
      texte: texte,
      complete: false,
    };

    /* Si le texte (input) n'est pas vide, on ajoute le nouveau mémo au tableau */
    if (memo.texte.length !== 0) {
      setMemos([
        ...memos,
        {
          /*   key: key, */
          id: id,
          date: timestamp,
          texte: texte,
          complete: false,
        },
      ]);
    }
  }

  return (
    <section className="FrmMemo">
      <form action="" onSubmit={ajouterMemo} id="frmMemo">
        <input
          type="text"
          id="input-memo"
          name="input-memo"
          autoFocus
          autoComplete="off"
          placeholder="Je veux me rappeler de..."
          size="30"
          onChange={(evt) => setTexte(evt.target.value)}
        ></input>
        <button
          className="frm-memo-bouton"
          type="submit"
          form="frmMemo"
          value="Submit"
        >
          Ajouter
        </button>
      </form>
    </section>
  );
}
