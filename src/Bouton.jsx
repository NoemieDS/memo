import Button from "@mui/material/Button";
import "./Bouton.scss";

export default function Bouton({
  memos,
  setMemos,
  filtrerMemos,
  setFiltrerMemos,
  filtre,
}) {
  function filtrerLesMemos() {
    if (filtre === "complétés") {
      afficherMemoComplete();
    } 
    else if (filtre === "actifs") {
      afficherMemoActif();
    } 
    else if (filtre === "supprimer complétés") {
      supprimerTousMemosCompletes();
    } else {
      setFiltrerMemos();
    }
  }

  /*
   ************************** Supprimer tous les mémos complétés **********************
   */

  function supprimerTousMemosCompletes(idd) {
    setMemos(memos.filter((memo) => memo.complete == false));
  }

  function afficherMemoActif() {
    setFiltrerMemos(memos.filter((memo) => memo.complete === false));
  }

  function afficherMemoComplete() {
    setFiltrerMemos(memos.filter((memo) => memo.complete === true));
  }

  return (
    <Button
      variant="contained"
      className={
        filtre === "supprimer complétés"
          ? "filtre-bouton filtre-supprimer"
          : "filtre-bouton"
      }
      aria-label="afficher-tout"
      size="small"
      onClick={filtrerLesMemos}
    >
      {filtre}
    </Button>
  );
}
