import React from 'react'
import styled from 'styled-components'

export const ContainerDiv = styled.div`
  width: 100%
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  padding: 50px
`
const StyledCharacterDiv = styled.div`
  width: 300px
  height: 100px
  border: 2px solid black
  border-radius: 4px
  background-color: #F8F8F8
  padding: 10px
  margin-bottom: 30px
`

function CharacterComponent(props) {
  return (
    <StyledCharacterDiv>
      <h2>{props.character.name}</h2>
      <p>Height : {props.fact} space-height-units</p>
    </StyledCharacterDiv>
  )
}

export default CharacterComponent