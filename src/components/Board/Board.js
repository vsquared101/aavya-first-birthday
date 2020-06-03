import React, {useState, useEffect} from 'react'
import Card from '../Card/Card'
import './Board.css'

const Board = (props) => {
  const [cards, setCards] = useState(props.cards);
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);

  const onCardClick = card => () => {

    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;

    const newCheckers = [...checkers, card];
    console.log(newCheckers);
    setCheckers(newCheckers);

    const cardsInCheckersMatched = validateCheckers(newCheckers);

    if (cardsInCheckersMatched) {
      console.log('called setCompleted...');
      setCompleted([...completed, newCheckers[0].type]);
    }

    if (checkersFull(newCheckers)) {
      console.log('checkers reset...');
      resetCheckersAfter(1000);
    }

    function validateCheckers(checkers){
      console.log('validating checkers...', checkers.length === 2 &&
      checkers[0].type === checkers[1].type);
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }

    function cardAlreadyInCheckers(checkers, card){
      console.log('card already in checkers...', checkers.length === 1 && checkers[0].id === card.id);
      return checkers.length === 1 && checkers[0].id === card.id
    }

    function checkersFull(checkers){
      console.log('checkers full...', checkers.length === 2, checkers.length);
      return checkers.length === 2
    }

    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([])
      }, time)
    }
  }

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped:
        checkers.find(c => c.id === card.id) ||
        completed.includes(card.type),
    }));
    setCards(newCards);
  }, [checkers, completed])

  return (
    <div className="Board">
      {cards.map(card => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </div>
  )
}

export default Board
