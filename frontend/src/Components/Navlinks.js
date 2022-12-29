import React from 'react'
import { NavLink } from 'react-router-dom'
import links from "../Utils/links"

const Navlinks = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        {/* these links are to test starting of navlinks */}
      {/* <NavLink to="/">
           Home
      </NavLink> */}
      
       
     
      
      
      
      <div class="navbar-nav">
      
      {links.map((link)=>{
        const {id,text,path}=link
        return ( <NavLink  to={path} key={id} href="#">{text}</NavLink>)
      })}
      
     </div>
    </div>
  )
}

export default Navlinks
