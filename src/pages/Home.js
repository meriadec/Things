import React, { Component } from 'react'

import Gallery from 'components/Gallery'

class Home extends Component {

  render () {
    return (
      <div>
        <header className='main-header'>
          <h1 className='main-title'>{'Things.'}</h1>
          <h2 className='main-subtitle'>
            {'Things from the life. Things from the present.'}<br />
            {'Things. Things.'}
          </h2>
        </header>
        <section className='main-actions'>
          <Gallery />
        </section>
      </div>
    )
  }

}

export default Home
