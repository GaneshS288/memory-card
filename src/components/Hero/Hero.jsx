export default function Hero({ gameStatus, hasWon, handleButtonClick }) {
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
        handleClick={handleButtonClick}
      ></HeroButton>
    </section>
  );
}

function HeroButton({ gameStatus, handleClick }) {
  let buttonText;

  if (gameStatus === "ready") {
    buttonText = "Start";
  } else if (gameStatus === "active") {
    return null;
  } else if (gameStatus === "concluded") {
    buttonText = "Play again";
  }

  return (
    <button type="button" onClick={() => handleClick()}>
      {buttonText}
    </button>
  );
}
