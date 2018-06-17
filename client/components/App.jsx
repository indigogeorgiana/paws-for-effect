import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text='Canines using supercanine abilities for social good.'/>
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' img='/images/bulldog.png' />
    <Dog name='Delilah' breed='Colli-Cross' superpower='Door opening' />
    <Dog name='Shame' breed='Sheppard' superpower='Codeing' />
  </div>
)

export default App
