import React from 'react'

import NamePlate from './NamePlate'
import Pic from './Pic'

const Dog = props => {
  return (
    <div className='dog-wrapper'>
      <NamePlate name={this.props.name} breed={this.props.breed} superpower={this.props.superpower} />
      <div className='dog-pic'>
        <Pic image={this.props.image} alt={this.props.name} />
      </div>
    </div>
  )
}

export default Dog
