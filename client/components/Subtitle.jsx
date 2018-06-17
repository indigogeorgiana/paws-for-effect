import React from 'react'

const Subtitle = props => {
  return (
    <div className='subtitle-wrapper'>
      <div className='subtitle'>
        <h2 className='subtitle-text'>{props.text}</h2>
      </div>
    </div>

  )
}

export default Subtitle
