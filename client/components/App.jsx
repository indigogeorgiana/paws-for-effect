import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text='These are some dogs that idk do things i guess'/>
    <Dog name='Nert' breed='Dalmation' superpower='Just being like super cool' />
    <Dog name='Atomic' breed='Sheepadoodle' superpower='teleport' />
  </div>

)

export default App
