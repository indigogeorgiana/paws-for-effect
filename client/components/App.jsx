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
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' />
  </div>
)

export default App
