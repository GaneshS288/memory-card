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

  useEffect(() => {
    const newCardsData = getPokemonsData();
    newCardsData.then((value) => {
      setCardsData(value);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <CardsContainer cardsData={cardsData}></CardsContainer>
    </>
  );
}

export default App;
