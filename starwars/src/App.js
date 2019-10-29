import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import CharacterComponent, {ContainerDiv} from './components/Character Component'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let [characters, setCharacters] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(
    () => {
      const getData = () => {
        axios.get('https://swapi.co/api/people/')
          .then(charList => {
            console.log(charList)
            setCharacters(charList.data.results)
              // console.log(character)
          })
          .catch(err => {
            console.log(`Error:` + err)
          })
      }
      getData()
    }, []
  )

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <ContainerDiv>{characters.map((item, index) => {
          return <CharacterComponent key={`${item.name}-${index}`} character={item} fact={item.height} />
        })}
      </ContainerDiv>
    </div>
  )
}

export default App
