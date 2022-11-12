import React from 'react';
import Navlinks from './Navlinks';

const Header = () => {
  return (
    <div className='template_menu_panel'>
      <div className="template_menu_section">
      <ul>
        <li><Navlinks/></li>
                {/* <li><a href="#">Home</a></li> */}
                {/* <li><a href="#">MovieReviews</a></li> */}
                <button type="submit" className="btn">Telugu/English</button> 
                                  
      </ul> 
       
      </div>
      
    </div>
  )
}

export default Header
