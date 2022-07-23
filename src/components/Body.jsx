import React from 'react'
import Card from './Card'
import cards from '../data'
import StyleBody from './styles/Body.styles'

export default function Body() {

  return (
    <StyleBody>
        { cards.map( card => (
           <Card card = { card }/>
        ))}
    </StyleBody>
  )
}
