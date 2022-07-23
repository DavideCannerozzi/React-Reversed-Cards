import React from 'react'
import { StyleCard } from './styles/Card.style'

function Card( { card }) {
  return (
    <StyleCard layout={ card.id % 2 === 0 && 'row-reverse' }>
        <div>
            <h2>{ card.name }</h2>
            <h3>Region: { card.region }</h3>
            <p>{ card.highlights }</p>
        </div>
        <div>
            <img src={`./images/${card.image}.jpg`} alt={ card.alt } />
        </div>
    
    </StyleCard>
  )
}

export default Card
