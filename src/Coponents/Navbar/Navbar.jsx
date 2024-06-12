import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import price from '../../assets/price.png'
import Galleryicon from '../../assets/Gallery-Icon.png'
import BLog from '../../assets/blog.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={0} duration={500}>Plans</Link></li>
            <li><Link to='template' smooth={true} offset={0} duration={500}>Templetes</Link></li>
            <li><Link to='blog' smooth={true} offset={0} duration={500}>Blog</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500}>About Us</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
