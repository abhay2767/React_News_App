import React, { Component } from 'react'
import Spiner from './Images/Spiner.gif'

export class LoadingSpiner extends Component {
  render() {
    return (
      <div className='flex justify-center p-32'>
        <img src = {Spiner} alt = "loading"/>
      </div>
    )
  }
}

export default LoadingSpiner
