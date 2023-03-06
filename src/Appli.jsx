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
      <main>
      <FrmTache />
      <ListeTaches />
      <Operations />
      </main>
      <Pied2Page />
    </div>
  );
}
