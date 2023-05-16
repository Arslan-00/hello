import React from 'react'
import "./Header.css"

import Image1 from "../../assets/1.jpg"


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>hello I'm </h5>
        <h1>Arslan khan</h1>
        <h5 className="text-light">

          Web Developer
        </h5>


        <div className="image">
          <img src={Image1} />
        </div>
       
      </div>
    </header>
  )
}

export default Header
