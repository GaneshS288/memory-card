export default function Hero({gameStatus}) {
    const errorMsg  = "Failed to fetch game resources, please click retry";
    const gameInstructions = "Click on the cards to increase your score but don't click the same card Twice! You lose if you click the same card twice.";
    const loserMessage = "Oops! better luck next time";
    const winnerMessage = "Wow you're really good at this! Max score achieved";

    return (
        <section className="hero">
            <p className="hero-text"></p>
            <button type="button" className="hero-button"></button>
        </section>
    )
}