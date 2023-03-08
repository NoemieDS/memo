import "./FrmMemo.scss";
import Memo from "./Memo";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from 'react'; 


export default function FrmMemo() {


 /* comment recevoir un array de Appli ?
 **************************  Lire les mémos dans le localStorage ou initié un []
*/
 const [memos, setMemos] = useState(
  ()=>JSON.parse(localStorage.getItem('mes-memos')) || []
  );

  useEffect(
    () => localStorage.setItem('mes-memos', JSON.stringify(memos))
    , [memos] 
  );

 /*
 **************************  Fonction pour ajouter un mémo au tableau des mémos
*/
  function ajouterMemo(id, memo, timestamp) {
    
    console.log("Recu du de la boite de saisie : ", id, memo, timestamp)
    
    //On copie le tableau des mémos et on le met dans setMemos() de useState
    setMemos( [...memos, 
      //Et on ajoute le nouveau memo
      {
        id: id, 
        memo: memo, 
        date: timestamp
      },
    ])
  };

  
  
  const [memo, setMemo] = useState(""); 
 
    const gererSaisieClavier = Input => {
    console.log(`Tape => ${evt.target.value}`);
    setMemos(evt.target.value);
  }; 

  function gererActionMem0() {
    let timestamp = new Date().getTime();
    let id = crypto.randomUUID();
    actionMemo(id, memo, timestamp) 
  }


  return (
    <section className="FrmMemo">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "75vw" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Aujouter un mémo"
          variant="filled"
       /*    onChange={gererSaisieClavier}  */
           onChange={(evt) => ajouterMemo(evt.target.value)} 
          value={memo}
        />
      </Box>
    </section>
  );
}
