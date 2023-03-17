import "./Memo.scss";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

export default function Memo({ 
  id, 
  date, 
  texte, 
  complete,
  completerMemo,
  supprimerMemo,
 }) {

  /* Variables pour les dates et les heures */
  const dateM = new Date(date).toLocaleDateString('fr-CA', {dateStyle: 'long',});
  const heureM = new Date(date).toLocaleTimeString('fr-CA', {hour: '2-digit', minute:'2-digit'})

  return (
    <article className="Memo">
      <div className="memo-haut">
        <p className={complete ? "memo-date memo-completer-date" : "memo-date"} >

          {dateM} <br/> à {' '} {heureM}
        </p>
        <IconButton
          onClick={() => completerMemo(id)}
          className={complete ? "bouton-completer-bt-vrai " : "memo-completer-bt"} 
          aria-label="memo-completer"
          size="small"
        >
          <CheckSharpIcon />
        </IconButton>
      </div>
      <h4 className={complete ? "un-memo memo-completer-texte" : "un-memo"} >
        {texte}
      </h4>
      <div className="memo-bas">
        <IconButton
          onClick={() => supprimerMemo(id)} 
          className={complete ? "memo-supprimer-bt .memo-supprimer" : "memo-supprimer-bt"} 
          aria-label="memo-supprimer"
          size="small"
        >
          <ClearIcon />
        </IconButton>
      </div>
    </article>
  );
}
