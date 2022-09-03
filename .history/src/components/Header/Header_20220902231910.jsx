import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>Why</li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Header