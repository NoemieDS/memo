import "./ListeMemos.scss";
import Memo from "./Memo";

export default function ListeMemos({ memos, setMemos, filtreMemos }) {
  /**
   * Supprime un mémo de la collection de mémos
   *
   * @param string id : identifiant du mémo
   * return void
   */
  function supprimerMemo(idd) {
    setMemos(memos.filter((memo) => memo.id !== idd));
  }

  /**
   * Basculer un mémo compléter à "true"
   *
   * @param string id : identifiant du mémo
   * return memo
   */

  function completerMemo(id, texte, timestamp, complete) {
    setMemos(
      memos.map(memo => {
        if(memo.id === id) {
          memo.complete = !memo.complete;
        }
        return memo;
      })
    )
  }

  return memos.length > 0 ? (
    <section className="ListeMemos">
      {/* On filtre selon la variable d'état des boutons cliqués */}
      {filtreMemos
        ? filtreMemos.map((memo) => {
            return (
              <Memo
                key={memo.id}
                {...memo}
                supprimerMemo={supprimerMemo}
                completerMemo={completerMemo}
              />
            );
          })
        : memos.map((memo) => (
            <Memo
              key={memo.id}
              {...memo}
              supprimerMemo={supprimerMemo}
              completerMemo={completerMemo}
            />
          ))}
    </section>
  ) : (
    <div className="aucun-memo">
      <span>A</span>
      <span>u</span>
      <span>c</span>
      <span>u</span>
      <span>n</span> 
      {" "}
      <span>M</span>
      <span>é</span>
      <span>m</span>
      <span>o</span> 
      {" "}
      <span>!</span>
    </div>
  );
}
