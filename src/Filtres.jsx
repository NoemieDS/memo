import "./Filtres.scss";
import Button from "@mui/material/Button";

export default function Filtres(id, date, texte, complete, memos, setMemos, afficherTout) {

  var nbTache = 0; //utiliser filter ?
  var nbTacheTexte = "";

  afficherNbTacheActive();
  function afficherNbTacheActive() {
    if (nbTache <= 1) {
      nbTacheTexte = "mémo actif";
    } else if (nbTache > 1) {
      nbTacheTexte = "mémoss actifs";
    }
    return nbTacheTexte;
  }

  return (
    <section className="Filtres">
      <h5>
        {nbTache} {nbTacheTexte}
      </h5>
      <Button
        variant="contained"
        className="filtre-bouton"
          aria-label="afficher-tout"
          size="small"
         onClick={() => {
          afficherTout();
        }}
      >
        Tout
      </Button>

      <Button
          variant="contained"
          className="filtre-bouton"
            aria-label="afficher-completes"
            size="small"
        onClick={() => {
          alert("clicked");
        }}
      >
        Complétés
      </Button>

      <Button
         variant="contained"
        className="filtre-bouton"
          aria-label="afficher-actifs"
          size="small"
        onClick={() => {
          alert("clicked");
        }}
      >
        Actifs
      </Button>

      <Button
         variant="contained"
          className="filtre-bouton filtre-supprimer"
            aria-label="supprimer-completes"
            size="small"
        onClick={() => {
          alert("clicked");
        }}
      >
        Supprimer complétés
      </Button>
    </section>
  );
}
