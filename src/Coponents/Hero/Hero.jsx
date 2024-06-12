import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text'>
            <h1>WANT TO MAKE WEBSITE</h1>
            <p>WE PROVIDE THE BEST WEBSITES FOR BUSSINESS</p>
            <button class="btn12">CHEACK OUR PLANS <img src={dark_arrow} alt=''/></button>
        </div>
      
    </div>
  )
}

export default Hero
