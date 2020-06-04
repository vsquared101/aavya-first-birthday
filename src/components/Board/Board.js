import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import Greeting from '../Greeting/Greeting';
import './Board.css';

const Board = (props) => {
  const [cards, setCards] = useState(props.cards);
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);

  const onCardClick = card => () => {

    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;

    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);

    const cardsInCheckersMatched = validateCheckers(newCheckers);

    if (cardsInCheckersMatched) {
      if(completed.length === 5){
        setTimeout(() => {
          setCompleted([...completed, newCheckers[0].type]);
        }, 1000)
      } else{
        setCompleted([...completed, newCheckers[0].type]);
      }
    }

    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000);
    }

    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }

    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id
    }

    function checkersFull(checkers){
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
      {completed.length !== 6 && cards.map(card => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}

      {completed.length === 6 && <Greeting/>}
    </div>
  )
}

export default Board
