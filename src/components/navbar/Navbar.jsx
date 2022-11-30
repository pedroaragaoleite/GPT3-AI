import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import logo from '../../assets/logo.svg'


const Menu = () => (
  <>
    <li><Link to="#home">Home</Link></li>
    <li><Link to="#wgpt3">What is GPT?</Link></li>
    <li><Link to="#possibility">Open AI</Link></li>
    <li><Link to="#features">Case Studies</Link></li>
    <li><Link to="#library">Library</Link></li>+ 
  </>
)


const Navbar = () => {
  const [ toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <ul className='gpt3__navbar-links_container'>
          <Menu />
        </ul>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className='gpt3__navbar-mobile'>
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-mobile_container scale-up-center'>
            <ul className='gpt3__navbar-mobile_links'>
              <Menu />
            </ul>
            <div className='gpt3__navbar-mobile_sign'>
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar