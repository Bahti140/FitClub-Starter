import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">    
            <Header/>
            <div className="the-best-add">
                <div></div>
                <span></span>
            </div>
        </div>
        <div className="right-h">right side</div>

    </div>
  )
}

export default Hero