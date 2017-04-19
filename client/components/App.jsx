import React from 'react'

import Dog from './Dog'
import Subtitle from './Subtitle'

const dogs = [
  {
    name: 'Desdemona',
    breed: 'Bulldog',
    superpower: 'Heat vision',
    image: 'bulldog.png'
  }, {
    name: 'Othello',
    breed: 'Greyhound',
    superpower: 'Sense of impending tragedy',
    image: 'greyhound.png'
  }, {
    name: 'Lady MacBeth',
    breed: 'Scottie',
    superpower: 'Stealth. Also, guilt and remorse.',
    image: 'scottie.png'
  }
]

function getDog (dog, i) {
  return (
    <Dog key={i} name={dog.name} breed={dog.breed} superpower={dog.superpower} image={dog.image} />
  )
}

const App = () => {
  return (
    <div className='container'>
      <img className='spinner' src='images/paw.png' />
      <Subtitle text='Canines using supercanine abilities for social good.' />
      {dogs.map(getDog)}
    </div>
  )
}

export default App
