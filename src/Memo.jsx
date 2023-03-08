import "./Memo.scss";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

export default function Memo(date) {
  return (
    <article className="Memo">
      <div className="memo-haut">
        <p className="memo-date">
          {new Date(date).toLocaleDateString("fr-CA", { dateStyle: "long" })}
        </p>
        <IconButton
          onClick={() => completerMemo(id)}
          className="memo-completer"
          aria-label="memo-completer"
          size="small"
        >
          <CheckSharpIcon />
        </IconButton>
      </div>
      <h4 className="un-memo">
        Avancer mon TP 1 et intégrer le formulaire aujourd'hui.{" "}
      </h4>
      <div className="memo-bas">
        <IconButton
          onClick={() => supprimerMemo(id)}
          className="memo-supprimer"
          aria-label="memo-supprimer"
          size="small"
        >
          <ClearIcon />
        </IconButton>
      </div>
    </article>
  );
}
