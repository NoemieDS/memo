import "./Appli.scss";
import Entete from "./Entete";
import FrmTache from "./FrmTache";
import ListeTaches from "./ListeTaches";
import Operations from "./Operations";
import Pied2Page from "./Pied2Page";

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />
  <main className="contenu-principal">
      <FrmTache />
      <div className="titre-liste-taches">
        <h3>La liste des taches</h3>
      </div>
      <div className="defiler">
      <ListeTaches />

      </div>
      <Operations />
      </main>
      <Pied2Page />
    </div>
  );
}
