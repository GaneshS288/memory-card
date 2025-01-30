import "./Header.css"

export default function Header({score, highScore}) {
    return(
        <header>
            <h1 className="header-title">Memory Cards</h1>
            <div className="scores-container" >
                <p className="score"><span>Score</span> <span>-</span> <span>{score}</span></p>
                <p className="highscore"><span>HighScore</span> <span>-</span> <span>{highScore}</span></p>
            </div>
        </header>
    )
}