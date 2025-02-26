import React, {useState} from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState)
 }

  return (
    <header>
        <nav>
            <div className="nav-wrapper">
                <Link className='link' to="/"><h1 className='nav-title'>Nails By Savanna</h1></Link>
                <div className={`navbar-links ${isOpen ? 'opened' : 'closed'}`}>
                    <Link className='link' onClick={toggleNavbar} to="/">Home</Link>
                    <a href="#services" className='link' onClick={toggleNavbar} to="/services">Services</a>
                    <a href="#policies" className='link' onClick={toggleNavbar} to="/policies">Policies</a>
                    <Link className='link' onClick={toggleNavbar} to="/gallery">Gallery</Link>
                    <Link className='link' onClick={toggleNavbar} to="/contact">Contact</Link>
                </div>
                {!isOpen ? 
                (
                <div onClick={toggleNavbar} className="menu-btn">
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                ) : 
                (
                <div onClick={toggleNavbar} className="menu-btn close">
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>               
                )
                }
            </div>
        </nav>
    </header>
  )
}
