import './Filtres.scss';

export default function Filtres(
  id, 
  date, 
  texte, 
  complete,
  memos,
  setMemos,
) {

 var nbTache = 0; //utiliser filter ?
 var nbTacheTexte = "";


 afficherNbTacheActive()

  function afficherNbTacheActive() {
    if (nbTache <= 1) {
      nbTacheTexte = "tâche active"
    }
    else if (nbTache > 1) {
      nbTacheTexte = "tâches actives"
    }
    return  nbTacheTexte
  }

  return(
    <section className="Filtres">
        <h5>{nbTache}{' '}{nbTacheTexte}</h5>
        
      </section>
  ) 
}