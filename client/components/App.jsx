import React from 'react'
import Dog from './Dog.jsx'

// const props = {
//   name: 'Desdemona',
//   breed: 'Bulldog',
//   superpower: 'Heat vision'
// }

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' img='/images/bulldog.png' />
    <Dog name='Elsie' breed='Poodle' superpower='Flight' img='/images/scottie.png' />
    <Dog name='Alice' breed='Great Dane' img='/images/greyhound.png' />
  </div>
)

export default App
