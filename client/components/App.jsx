import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text='Canines using supercanine abilities for social good.'/>
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' imageName="bulldog.png"/>
    <Dog name='Delilah' breed='Scottie' superpower='Door opening' imageName="scottie.png"/>
    <Dog name='Shame' breed='Greyhound' superpower='Codeing' imageName="greyhound.png"/>
  </div>
)

export default App
