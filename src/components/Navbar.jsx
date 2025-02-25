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
                <h1 className='nav-title'>Nails By Savanna</h1>
                <div className={`navbar-links ${isOpen ? 'opened' : 'closed'}`}>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/services">Services</Link>
                    <Link className='link' to="/policies">Policies</Link>
                    <Link className='link' to="/gallery">Gallery</Link>
                    <Link className='link' to="/contact">Contact</Link>
                    <Link className='link' to="/book">Book</Link>
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
