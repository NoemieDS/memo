import "./ListeMemos.scss";
import Memo from "./Memo";

export default function ListeMemos({
  memos,
  setMemos,
  filtreMemos,
  setFiltreMemos,
  id, 
  date, 
  texte, 
  complete
}) {
  /**
   * Supprime un mémo de la collection de mémos
   *
   * @param string id : identifiant du mémo
   * return void
   */
  function supprimerMemo(idd) {
    setMemos(memos.filter((memo) => memo.id !== idd));
    setFiltreMemos(memos.filter((memo) => memo.id !== idd));
  }

  /**
   * Basculer un mémo compléter à "true"
   *
   * @param string id : identifiant du mémo
   * return memo
   */
  function completerMemo(id, texte, timestamp, complete) {
     setMemos(
      memos.map((memo) => {
        if (memo.id === id) {
          return {
            id: memo.id,
            date: memo.date,
            texte: memo.texte,
            complete: true,
          };
        }
        return memo;
      })
    );
   /*  setFiltreMemos(
      memos.map((memo) => {
        if (memo.id === id) {
          return {
            id: memo.id,
            date: memo.date,
            texte: memo.texte,
            complete: true,
          };
        }
        return memo;
      })
    ); */
  }


  return memos.length > 0 ? (
 
    <section className="ListeMemos">
{/* On filtre selon la variable d'état des boutons cliqués */}
{   filtreMemos ?  filtreMemos.map((memo)=> {
            return (
              <Memo
          key={memo.id}
          {...memo}
          supprimerMemo={supprimerMemo}
          completerMemo={completerMemo}
        />
            )
          }) :

     memos.map((memo) => (
        <Memo
          key={memo.id}
          {...memo}
          supprimerMemo={supprimerMemo}
          completerMemo={completerMemo}
        />
      ))} 

    </section>
  ) : (
    <div>
      <h2>Aucun mémo !</h2>
    </div>
  );
}
