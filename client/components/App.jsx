import React from 'react'
import Dog from './Dog.jsx'

const dogs = [
  {
    name: 'Desdemona',
    breed: 'Bulldog',
    superpower: 'Heat vision',
    img: '/images/bulldog.png'
  },
  {
    name: 'Elsie',
    breed: 'Scottie',
    superpower: 'Flight',
    img: '/images/scottie.png'
  },
  {
    name: 'Alice',
    breed: 'Greyhound',
    img: '/images/greyhound.png'
  }
]

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    {dogs.map(function (dog) {
      return <Dog key={dog.name} name={dog.name} breed={dog.breed} superpower={dog.superpower} img={dog.img} />
    })}
    {/* <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' img='/images/bulldog.png' />
    <Dog name='Elsie' breed='Poodle' superpower='Flight' img='/images/scottie.png' />
    <Dog name='Alice' breed='Great Dane' img='/images/greyhound.png' /> */}
  </div>
)

export default App
