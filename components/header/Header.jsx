export default function Header({score, highScore}) {
    return(
        <header>
            <h1 className="main-title">Memory Cards</h1>
            <div className="scores-container" >
                <p className="score">{score}</p>
                <p className="highscore">{highScore}</p>
            </div>
        </header>
    )
}