import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CardsContainer from "./components/CardsContainer/CardsContainer.jsx";
import getPokemonsData from "./util/fetchCardData.js";
import shuffleArray from "./util/shuffleArray.js";

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("ready");
  const [hasWon, setHasWon] = useState(false);

  function updateCardsData(selectedCardData, reset = false) {
    if(reset) {
      let newCardsData = cardsData.map((data) => {
        return {...data, selected: false};
      })
      setCardsData(shuffleArray(newCardsData));
      return;
    }
    if(selectedCardData.selected)
      return;

    let newSelectedCardData = {...selectedCardData, selected : true};
    let newCardsData = [...cardsData].filter((data) => data.id !== newSelectedCardData.id);
    newCardsData.push(newSelectedCardData);
    setCardsData(shuffleArray(newCardsData));
  }


  function updateScores(cardSelected, reset = false) {
    const newScore = score + 1;

    if (reset) {
      setScore(0);
    } else if(!cardSelected) {
      setScore(newScore);
      highScore < newScore ? setHighScore(newScore) : null;
    }
  }

  function updateGameStatus(cardSelected, setActive = false) {
    if(setActive)
      setGameStatus("active");
    else if(cardSelected)
      setGameStatus("concluded");
    else if((score + 1) === cardsData.length)
      setGameStatus("concluded");
  }

  function updateHasWon(cardSelected, reset = false) {
    if(reset)
      setHasWon(false);
    else if((score + 1) === cardsData.length && !cardSelected)
      setHasWon(true);
  }
  
  function handleCardAnimationEnd(cardData) {
    updateScores(cardData.selected);
    updateCardsData(cardData);
    updateGameStatus(cardData.selected);
    updateHasWon(cardData.selected);
    console.log(score, highScore);
  }

  function handleStartOrResetGame() {
    updateCardsData(null, true);
    updateGameStatus(false, true);
    updateScores(false, true);
    updateHasWon(false, true);
  }

  useEffect(() => {
    const newCardsData = getPokemonsData();
    newCardsData.then((value) => {
      setCardsData(shuffleArray(value));
    });
  }, []);

  return (
    <>
      <Header score={score} highScore={highScore}></Header>
      <Hero gameStatus={gameStatus} hasWon={hasWon} handleButtonClick={handleStartOrResetGame}></Hero>
      <CardsContainer
        cardsData={cardsData}
        handleCardAnimationEnd={handleCardAnimationEnd}
        gameStatus={gameStatus}
      ></CardsContainer>
    </>
  );
}

export default App;
