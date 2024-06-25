import React from 'react';



export default function GameBoard({onSquareSelect,board}) {
    

    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    
    // function handleSymbolSelect(rowIndex,colIndex ,activePlayerSymbol){
    //     // prevGameBoard is the instance of initialGameboard that comes automatically in this variable
    //     setGameBoard((prevGameBoard)=>{
    //         // prevGameBoard[rowIndex][colIndex]="X"; // it will change original array immediately 

    //         //here we will create instane/reference of prevGameBoard cause we don't want to loose its previous state
    //         let updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])] 
    //         updatedBoard[rowIndex][colIndex]= activePlayerSymbol;
    //         return updatedBoard;}
    //     )
    //     onSquareSelect()
        
    // }
  return (
  <ol id="game-board">
        {board.map((row, rowIndex)=>
            <li key = {rowIndex}>
                <ol>
                    {row.map((column,columnIndex)=>
                        <li key = {columnIndex}>
                            <button onClick={() => onSquareSelect(rowIndex,columnIndex)}/*if we want to put parameters to function calling we would call it like a callback function not like onClick = {handleSymbolSelect} */
                            disabled={column!== null}>{column}</button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
  )
}
