import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CardsContainer from "./components/CardsContainer/CardsContainer.jsx";
import getPokemonsData from "./util/fetchCardData.js";

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("ready");
  const [hasWon, setHasWon] = useState(false);

  function updateScores(cardSelected, reset = false) {
    const newScore = score + 1;

    if (reset) {
      setScore(0);
    } else if(cardSelected) {
      setScore(newScore);
      highScore < newScore ? setHighScore(newScore) : null;
    }
  }

  function updateCardsData(selectedCardData) {
    if(selectedCardData.selected)
      return;

    let newSelectedCardData = {...selectedCardData, selected : true};
    let newCardsData = [...cardsData].filter((data) => data.id !== newSelectedCardData.id);
    newCardsData.push(newSelectedCardData);
    setCardsData(newCardsData);
  }

  function handleCardClick(cardData) {
    updateScores(cardData.selected);
    updateCardsData(cardData);
    cardData.selected ? setGameStatus("concluded") : null;
    console.log(score, highScore);
  }

  useEffect(() => {
    const newCardsData = getPokemonsData();
    newCardsData.then((value) => {
      setCardsData(value);
    });
  }, []);

  return (
    <>
      <Header score={score} highScore={highScore}></Header>
      <Hero gameStatus={gameStatus} setGameStatus={setGameStatus} hasWon={hasWon}></Hero>
      <CardsContainer
        cardsData={cardsData}
        handleCardClick={handleCardClick}
      ></CardsContainer>
    </>
  );
}

export default App;
