import React from 'react'
import { StyleHeader } from './styles/Header.style'

export default function Header( { title }) {
  return (
    <StyleHeader>
        <h1>{ title }</h1>
    </StyleHeader>
  )
}
