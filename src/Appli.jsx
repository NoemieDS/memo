import "./Appli.scss";
import Entete from "./Entete";
import FrmMemo from "./FrmMemo";
import ListeMemos from "./ListeMemos";
import Operations from "./Operations";
import Pied2Page from "./Pied2Page";
/* import { useEffect, useState } from 'react'; */

export default function Appli({}) {

 /*
 **************************  Lire les mémos dans le localStorage ou initié un []
*/
/* const [memos, setMemos] = useState(
  ()=>JSON.parse(localStorage.getItem('mes-memos')) || []
  );

  useEffect(
    () => localStorage.setItem('mes-memos', JSON.stringify(memos))
    , [memos]

    ); */
   

  return (
    <div className="Appli">
      <Entete />
  <main className="contenu-principal">
      <FrmMemo />
    {/*   <div className="titre-liste-taches">
        <h3>La liste des taches</h3>
      </div> */}
      <div className="defiler">
      <ListeMemos />
      </div>
      <Operations />
      </main>
      <Pied2Page />
    </div>
  );
}
