import React,{useState} from 'react';

import Navlinks from './Navlinks';
import { NavLink,Link } from 'react-router-dom'
import links from "../Utils/links"

//material ui design
import {Toolbar,Divider, IconButton,CssBaseline,Typography  } from '@mui/material'
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import AppBar from "../Components/ResponsiveAppBar"

import {HeaderStyle,useStyles} from "../WrapperStyles/AppBarWidgetStyles"


// const vstyle = {
//   customColor :{
//     background:'linear-gradient(to bottom, #02599C 0%, #0463a3 100%)'
// }
// }

const Header = () => {
  const variableValues = HeaderStyle;
  const classes = useStyles();
  
  
  return (
    // <div className='template_menu_panel'>
    //   <div className="template_menu_section">
    
    //   <ul >
    //     <li><Navlinks/></li>
    //             {/* <li><a href="#">Home</a></li> */}
    //             {/* <li><a href="#">MovieReviews</a></li> */}
    //             <button type="submit" className="btn">Telugu/English</button> 
                                  
    //   </ul> 
       
    //   </div>
    //  </div> 
//     The below code is with bootstrap
//      <nav className="navbar navbar-expand-sm template_menu_panel">
//   <div className="container-fluid ">
    
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         {links.map((link)=>(
//           <NavLink className='nav-link' to={link.path} key={link.id}>{link.text}</NavLink>
//         ))}
       
//       </div>
//     </div>
//   </div>
// </nav>
      

     
   
    
    <>
      
      <AppBar/>
      <Divider variant="middle" />
      <Toolbar className={classes.tagline}>EXPRESSING OUR THOUGHTS THROUGH WORDS</Toolbar>
      <Divider variant="middle" sx={{bgcolor:'red'}}/>
      <br/>
      
    </>
      
    
  )
}

export default Header
