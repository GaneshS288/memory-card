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

  function updateScores(cardSelected) {
    const newScore = score + 1;

    if (cardSelected) {
      setScore(0);
    } else {
      setScore(newScore);
      highScore < newScore ? setHighScore(newScore) : null;
    }
  }

  function handleCardClick(cardSelected) {
    updateScores(cardSelected);
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
      <Hero></Hero>
      <CardsContainer
        cardsData={cardsData}
        handleCardClick={handleCardClick}
      ></CardsContainer>
    </>
  );
}

export default App;
