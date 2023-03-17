import Button from "@mui/material/Button";
/* import "./Bouton.scss"; */
/* Le scss ne s'appliquant pas correctement sur les boutons (ni la couleur,
  ni le padding, etc, les classes sont dans le 
  fichier Filtres.jsx.*/

export default function Bouton({
  memos,
  setMemos,
  filtreMemos,
  setFiltreMemos,
  filtre,
}) {
  /*
   ************************** Filtrer et Supprimer tous les mémos complétés *****
   */

  function filtrerLesMemos() {
    if (filtre === "complétés") {
      setFiltreMemos(memos.filter((memo) => memo.complete === true));
    } else if (filtre === "actifs") {
      setFiltreMemos(memos.filter((memo) => memo.complete === false));
    } else if (filtre === "supprimer complétés") {
      setMemos(memos.filter((memo) => memo.complete == false));
    } else {
      setFiltreMemos();
    }
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
