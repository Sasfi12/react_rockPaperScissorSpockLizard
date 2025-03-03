import "./PlayerChoice.css"
import spock from "../../../public/icon-spock.svg"
import rock from "../../../public/icon-rock.svg"
import lizard from "../../../public/icon-lizard.svg"
import scissor from "../../../public/icon-scissors.svg"
import paper from "../../../public/icon-paper.svg"



export default function PlayerChoice ({clickedUserChoice , userChoice , botChoice , mainMenu}) {
    return (
        <div className="player-buttons choices" style={{padding: "2rem"}}>
            <img onClick={() => clickedUserChoice("spock")} className="player-button " src={spock} alt="spock" />
            <img onClick={() => clickedUserChoice("rock")} className="player-button  " src={rock} alt="rock" />
            <img onClick={() => clickedUserChoice("lizard")} className="player-button" src={lizard} alt="lizard" />
            <img onClick={() => clickedUserChoice("scissor")} className="player-button"src={scissor} alt="scissor" />
            <img onClick={() => clickedUserChoice("paper")} className="player-button " src={paper} alt="paper" />
        </div>
    )
} 