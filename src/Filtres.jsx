import "./Filtres.scss";
import Bouton from "./Bouton";
import Button from "@mui/material/Button";

export default function Filtres({
  filtrerMemos,
  setFiltrerMemos,
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
          setFiltrerMemos={setFiltrerMemos}
          filtrerMemos={filtrerMemos}
          filtre={"tout"}
        />
        <Bouton
          memos={memos}
          setMemos={setMemos}
          setFiltrerMemos={setFiltrerMemos}
          filtrerMemos={filtrerMemos}
          filtre={"complétés"}
        />
        <Bouton
          memos={memos}
          setMemos={setMemos}
          setFiltrerMemos={setFiltrerMemos}
          filtrerMemos={filtrerMemos}
          filtre={"actifs"}
        />

      <Bouton
          memos={memos}
          setMemos={setMemos}
          setFiltrerMemos={setFiltrerMemos}
          filtrerMemos={filtrerMemos}
          filtre={"supprimer complétés"}
        />
       
        {/*   <Button
        variant="contained"
        className="filtre-bouton"
          aria-label="afficher-tout"
          size="small"
          filtre = {'tout'}
          onClick={() => {
            setFiltrerMemos("tout")
          }}
      >
        Tout
      </Button> */}
        {/* <Bouton memos = {memos} setFiltrerMemos = {setFiltrerMemos} filtre = {'supprimer complétés'}/>
         */}
        {/*   <Button
          variant="contained"
          className="filtre-bouton"
            aria-label="afficher-completes"
            size="small"
        onClick={() => {
          setFiltrerMemos("completes")
        }}
      >
        Complétés
      </Button> */}

        {/*   <Button
         variant="contained"
        className="filtre-bouton"
          aria-label="afficher-actifs"
          size="small"
        onClick={() => {
          setFiltrerMemos("actifs")
        }}
      >
        Actifs
      </Button> */}

    {/*   <Button
          variant="contained"
          className="filtre-bouton filtre-supprimer"
          aria-label="supprimer-completes"
          size="small"
          onClick={() => {
            supprimerTousMemosCompletes(id);
          }}
        >
          Supprimer complétés
        </Button> */}
    </section>
  );
}
