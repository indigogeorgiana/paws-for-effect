import React from 'react'
import Dog from './Dog.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Dog name='Nert' breed='Dalmation' superpower='Just being like super cool' />
    <Dog name='Atomic' breed='Sheepadoodle' superpower='teleport' />
  </div>

)

export default App
