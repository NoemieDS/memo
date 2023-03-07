import "./Tache.scss";

export default function Tache() {
  return (
    <article className="Tache">
      <div className="tache-haut">
        <p className="tache-date">Date</p>
        <input type="checkbox" name="tache-completer" id="tache-completer" />
      </div>
      <h4 className="une-tache">Avancer mon TP 1 et intégrer le formulaire aujourd'hui. </h4>
      <div className="tache-bas">
        <input type="checkbox" name="tache-annuler" id="tache-annuler" />
        <input type="checkbox" name="tache-modifier" id="tache-modifier" />
      </div>
    </article>
  );
}
