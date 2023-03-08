import "./FrmMemo.scss";
import Memo from "./Memo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FrmMemo({memos, setMemos}) {
  const [texte, setTexte] = useState("");

  function ajouterMemo() {
    let timestamp = new Date().getTime();
    let id = crypto.randomUUID();
    let memo = {
      id: id,
      date: timestamp,
      texte: texte,
      complete: false,
    };
    
    setMemos([
      ...memos,
      {
        id: id,
        date: timestamp,
        texte: texte,
        complete: false,
      }
    ])
  }
console.log(memos.texte)
  return (
    <section className="FrmMemo">
      <TextField
        id="filled-basic"
        label="Aujouter un mémo"
        variant="filled"
        onChange={(evt) => setTexte(evt.target.value)}
      />
      <Button variant="contained" color="success" onClick={ajouterMemo}>
        Ajouter
      </Button>
      {/*    {console.log('test')} */}
    </section>
  );
}
