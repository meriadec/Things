import React, { Component } from 'react'

class Thing extends Component {

  state = {
    loaded: false
  }

  componentDidMount () {
    const { data } = this.props

    const img = new Image()
    img.onload = () => {
      if (this.isUnmounted) { return }
      this.setState({ loaded: true })
    }
    img.src = `/assets/img/${data.img}`
  }

  componentWillUnmount () {
    this.isUnmounted = true
  }

  render () {
    const { data } = this.props
    const loaded = !!this.state.loaded

    return (
      <div className='Thing'>
        {loaded
          ? (
            <div>
              <img src={`/assets/img/${data.img}`} />
              <div className='Thing-aside'>
                <div className='Thing-title'>{data.title}</div>
                <div className='Thing-desc'>{data.desc}</div>
              </div>
            </div>
          )
          : (
            <div className='Thing-placeholder'>
              <div className='loader-wrapper'>
                <div className='Thing-loader' />
              </div>
              <div className='loader-wrapper'>
                <div className='Thing-loader-yolo' />
              </div>
            </div>
          )}
      </div>
    )
  }

}

export default Thing
