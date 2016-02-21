import React, { Component } from 'react'

import data from 'assets/data'
import Thing from 'components/Thing'

class Gallery extends Component {

  render () {
    return (
      <div>
        {data.map((thing, i) => (
          <Thing key={i} data={thing} />
        ))}
      </div>
    )
  }

}

export default Gallery
