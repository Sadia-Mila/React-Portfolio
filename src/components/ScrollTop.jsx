import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowCircleUp } from "react-icons/fa";


const ScrollTop = () => {
    
  return (
    <>   

    <ScrollToTop smooth style={{backgroundColor:'transparent'}} component={<FaArrowCircleUp  color="blue" fontSize="40px" />} />

  
    </>
  )
}

export default ScrollTop