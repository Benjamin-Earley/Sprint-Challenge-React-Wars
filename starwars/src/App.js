import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let [character, setCharacter] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(
    () => {
      const getData = () => {
        axios.get('https://swapi.co/api/people/')
          .then(charList => {
            // console.log(charList)
            setCharacter(character = Object.values(charList.data.results))
              console.log(character)
          })
          .catch(err => {
            console.log(`Error:` + err)
          })
      }
      getData()
    }, []
  )

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {character.map((item, index) => {
          return <CharacterComponent key={`${item.name}-${index}`} character={item} fact={item.height} />
        })
      }  
    </div>
  );
}

function CharacterComponent(props) {
  return (
    <div>
      <h2>{props.character.name}</h2>
      <h3>Height : {props.fact} space-height-units</h3>
    </div>
  )
}

export default App;
