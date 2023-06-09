import "./Appli.scss";
import Entete from "./Entete";
import FrmMemo from "./FrmMemo";
import ListeMemos from "./ListeMemos";
import Filtres from "./Filtres";
import Pied2Page from "./Pied2Page";
import { useEffect, useState } from "react";

export default function Appli({}) {
  /*
   *****************************  Lire les mémos dans le localStorage ou initié un []
   */
  const [memos, setMemos] = useState(
    () => JSON.parse(localStorage.getItem("mes-memos")) || []
  );

  useEffect(
    () => localStorage.setItem("mes-memos", JSON.stringify(memos)),
    [memos]
  );

  /*
   **************************  Initialisation d'un état React pour les boutons de filtres
   */
  const [filtreMemos, setFiltreMemos] = useState();

  return (
    <div className="Appli">
      <Entete />
      <main className="contenu-principal">
        <FrmMemo memos={memos} setMemos={setMemos} />
        <Filtres
          memos={memos}
          setMemos={setMemos}
          filtreMemos={filtreMemos}
          setFiltreMemos={setFiltreMemos}
        />
        <div className="defiler">
          <ListeMemos
            memos={memos}
            setMemos={setMemos}
            filtreMemos={filtreMemos}
            setFiltreMemos={setFiltreMemos}
          />
        </div>
      </main>
      <Pied2Page />
    </div>
  );
}
