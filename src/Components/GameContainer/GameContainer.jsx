import React, { useState } from 'react'
import Player from "./Player";
import GameBoard from './GameBoard.jsx';
import Log from './Log.jsx';
import GameOver from './GameOver.jsx';

import {WINNING_COMBINATIONS} from "./Winning_Combinations.js"

let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns)=>{
  let currentActivePlayer = 'X';
      if(gameTurns.length>0  && gameTurns[0].player === 'X'){
        currentActivePlayer = 'O';
      }
      return currentActivePlayer;
}


export default function GameContainer() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState({
    "X" : "player 1",
    "O" : "player 2",
  });

  let activePlayer = deriveActivePlayer(gameTurns);
 
  
  let gameBoard = [...initialGameBoard.map(innerArray=>[...innerArray])];

  for(const turn of gameTurns){
    const {square , player }=turn ;
    const {row , col }= square;
    gameBoard[row][col]= player;
  }

  let winner;
    for (const combinations of WINNING_COMBINATIONS){
      const firstSquareSymbol =  gameBoard[combinations[0].row][combinations[0].column]
      const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
      const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner = playerName[thirdSquareSymbol];
      }
    }
    const hasDraw = (gameTurns.length === 9 && !winner);


   function handleSelectSquare(rowIndex,colIndex){
    setGameTurns(prevTurns =>{

      
    const currentActivePlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square:{row : rowIndex, col:colIndex},player:currentActivePlayer } , ...prevTurns];

      return updatedTurns;
    });

  }
  function handleRematch(){
    setGameTurns([]);
    console.log("Rematch")
  }
  function handlePlayerNameChange(symbol, newName){
    setPlayerName(prevName => {
      return {
        ...prevName, [symbol]:newName,
      }
    })

  }

  
 
   

  return (
    <main>
      <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player-1" symbol="X" isActive={activePlayer === "X"} onNameChange = {handlePlayerNameChange}/>
            <Player initialName="Player-2" symbol="O" isActive={activePlayer === "O"} onNameChange = {handlePlayerNameChange} />
          </ol>
          { (winner || hasDraw) &&  <GameOver winner={winner} onRematch={handleRematch} />
}
          <GameBoard onSquareSelect = {handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns = {gameTurns}/>
    </main>
  )
}
