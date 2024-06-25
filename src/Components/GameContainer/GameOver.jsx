export default function GameOver({winner,onRematch}){
    return(
        <div id="game-over">
            <h2>Game Over</h2>
            {winner &&<p>{winner} has Won! </p>}
            {!winner &&<p>It&apos;s a draw </p>}
            
                <button onClick={onRematch}>Rematch!</button>
           

        </div>
    )
    

}