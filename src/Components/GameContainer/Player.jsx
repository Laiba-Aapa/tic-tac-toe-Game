import React,{useState} from 'react'

export default function Player({initialName,symbol, isActive , onNameChange}) {
  
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  const handleEditButton=()=>{
    if(isEditing){
      onNameChange(symbol,playerName)
    }
    setIsEditing((editing) => !editing);
  }
  const handleChange = (e)=>{
    setPlayerName(e.target.value)

  }

  if(isEditing){
    editablePlayerName = <input type="text" value={playerName} required onChange={handleChange}/>
  }

  

  return (
    <li className={isActive? 'active':undefined}>
    <span className="player">
      {editablePlayerName }      
      <span className="player-symbol">{symbol}</span>
      
    </span>
    <button onClick={ handleEditButton}>{isEditing?"Save":"Edit"}</button>
  </li>
  )
}
