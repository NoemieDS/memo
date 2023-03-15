import "./Filtres.scss";
import Bouton from "./Bouton";
import Button from "@mui/material/Button";

export default function Filtres({
  filtreMemos,
  setFiltreMemos,
  memos,
  setMemos
}) {

/*
 ************************** Afficher les mémos actifs ******************************
*/

let nbMemo = memos.filter((memo) => memo.complete == false);
let nbMemoTxt = nbMemo.length;

 return (
    <section className="Filtres">
        <h5>
        {nbMemoTxt} {(nbMemoTxt <= 1) ? "mémo actif" : "mémos actifs"}
        </h5>
        <Bouton
          memos={memos}
          setMemos={setMemos}
          setFiltreMemos={setFiltreMemos}
          filtreMemos={filtreMemos}
          filtre={"tout"}
        />
        <Bouton
          memos={memos}
          setMemos={setMemos}
          setFiltreMemos={setFiltreMemos}
          filtreMemos={filtreMemos}
          filtre={"complétés"}
        />
        <Bouton
          memos={memos}
          setMemos={setMemos}
          setFiltreMemos={setFiltreMemos}
          filtreMemos={filtreMemos}
          filtre={"actifs"}
        />

      <Bouton
          memos={memos}
          setMemos={setMemos}
          setFiltreMemos={setFiltreMemos}
          filtreMemos={filtreMemos}
          filtre={"supprimer complétés"}
        />
       
    </section>
  );
}
