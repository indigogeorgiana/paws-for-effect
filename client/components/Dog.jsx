import React from 'react'

const Dog = props => {
  return (
    <div className='dog-wrapper'>
      <div className='dog'>
        <div className='dog-name-plate'>
          <img className='dog-image' src={props.img} alt={props.name} />
          <span className='dog-name'>{props.name}</span>
          <span className='dog-breed'>{props.breed}</span>
        </div>
        <span className='dog-superpower'>{props.superpower}</span>
      </div>
    </div>
  )
}

export default Dog
