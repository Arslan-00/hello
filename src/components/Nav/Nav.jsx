import React from 'react'
import "./Nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { BiMessageSquareDots } from "react-icons/bi"
import { RiCustomerService2Line } from "react-icons/ri"
import { BiBook } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#') }><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experinece" onClick={() => setActiveNav('#experinece')} className={activeNav === '#' ? 'active' : ''}><BiBook /></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#' ? 'active' : ''}><RiCustomerService2Line /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ''}><BiMessageSquareDots /></a>
    </nav>
  )
}

export default Nav
