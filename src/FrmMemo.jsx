import "./FrmMemo.scss";
import Memo from "./Memo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FrmMemo({ memos, setMemos }) {
  const [texte, setTexte] = useState("");

  function ajouterMemo(evt) {
       
      let timestamp = new Date().getTime();
      let id = crypto.randomUUID();
      let memo = {
        id: id,
        date: timestamp,
        texte: texte,
        complete: false,
      };

      if (memo.texte.length !== 0) {
      setMemos([
        ...memos,
        {
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
          placeholder="Je veux me rappeller de..."
          onChange={(evt) => setTexte(evt.target.value)}
        ></input>
        <button type="submit" form="frmMemo" value="Submit">
          Ajouter
        </button>
      </form>

      {/*       <TextField
        id="filled-basic"
        label="Aujouter un mémo"
        variant="filled"
        onChange={(evt) => setTexte(evt.target.value)}
      /> */}
      {/*  <Button variant="contained" color="success" onClick={ajouterMemo}>
        Ajouter
      </Button> */}
      {/*    {console.log('test')} */}
    </section>
  );
}
