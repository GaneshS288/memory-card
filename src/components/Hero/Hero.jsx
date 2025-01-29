export default function Hero({ gameStatus, setGameStatus, hasWon }) {
  const errorMsg = "Failed to fetch game resources, please click retry";
  const gameInstructions =
    "Click on the cards to increase your score but don't click the same card Twice! You lose if you click the same card twice.";
  const loserMessage = "Oops! better luck next time";
  const winnerMessage = "Wow you're really good at this! Max score achieved";

  return (
    <section className="hero">
      <p className="hero-text">
        {gameStatus === "ready" ? gameInstructions : null}
        {gameStatus === "active" ? gameInstructions : null}
        {gameStatus === "concluded" && hasWon === true
          ? winnerMessage
          : loserMessage}
      </p>
      <HeroButton
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      ></HeroButton>
    </section>
  );
}

function HeroButton({ gameStatus, setGameStatus }) {
  let buttonText;
  let newGameStatus;

  if (gameStatus === "ready") {
    buttonText = "Start";
    newGameStatus = "active";
  } else if (gameStatus === "active") {
    return null;
  } else if (gameStatus === "concluded") {
    buttonText = "Play again";
    newGameStatus = "concluded";
  }

  return (
    <button type="button" onClick={() => setGameStatus(newGameStatus)}>
      {buttonText}
    </button>
  );
}
