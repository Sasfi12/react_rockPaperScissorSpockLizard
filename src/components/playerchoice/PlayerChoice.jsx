import "./PlayerChoice.css"
export default function PlayerChoice ({clickedUserChoice}) {
    return (
        <div className="player-buttons">
            <button onClick={() => clickedUserChoice("spock")} className="player-button   bg-amber-950">spock</button>
            <button onClick={() => clickedUserChoice("rock")} className="player-button    bg-amber-950">rock</button>
            <button onClick={() => clickedUserChoice("lizard")} className="player-button  bg-amber-950">lizard</button>
            <button onClick={() => clickedUserChoice("scissor")} className="player-button bg-amber-950">scissor</button>
            <button onClick={() => clickedUserChoice("paper")} className="player-button   bg-amber-950">paper</button>
        </div>
    )
} 