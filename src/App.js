import React from 'react'
import Board from './components/Board/Board'
import backImg from './assets/images/pp_bg.png'
import aavya from './assets/images/aavya.jpg'
import coolaavya from './assets/images/coolaavya.jpg'
import anujdada from './assets/images/anujdada.jpg'
import neetikadidi from './assets/images/neetikadidi.jpg'
import taujitaiji from './assets/images/taujitaiji.jpg'
import bhabhi from './assets/images/bhabhi.jpg'

function App() {
  const cards = buildCards()
  return (
    <div className="App" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Board cards={cards} />
    </div>
  )
}

export default App

function buildCards() {
  let id = 0
  const images = {aavya, coolaavya, anujdada, neetikadidi, taujitaiji, bhabhi}
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}
