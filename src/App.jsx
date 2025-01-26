import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import CardsContainer from './components/CardsContainer/CardsContainer.jsx'

function App() {
  

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <CardsContainer cardsData={[]}></CardsContainer>
    </>
  )
}

export default App
