import React from 'react'
import { NavLink } from 'react-router-dom'
import links from "../Utils/links"

const Navlinks = () => {
  return (
    <div>
        {/* these links are to test starting of navlinks */}
      {/* <NavLink to="/">
           Home
      </NavLink> */}
      
      {links.map((link)=>{
        const {id,text,path}=link
        return (<NavLink to={path} key={id}>{text}</NavLink>)
      })}
    </div>
  )
}

export default Navlinks
