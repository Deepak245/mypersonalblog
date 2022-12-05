import React,{ useState, useCallback }  from 'react'

const CustomeScrollBar = ({children}) => {
    const [hovering,setHovering]= useState(false);
    const handleMouseOver = useCallback(()=>{
        setHovering(true);
    },[]);

    const handleMouseOut = useCallback(()=>{
        setHovering(false);
    },[])
  return (
    <div className='scrollhost-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {children}
      <div className='scroll-bar' style={{opacity:hovering?1:0}}></div>
    </div>
  )
}

export default CustomeScrollBar
