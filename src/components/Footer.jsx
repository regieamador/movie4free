import React from 'react'

const Footer = ({mode}) => {
    const styles = {
        backgroundColor: mode ? "#111011" : "white",
        color: mode ? "white" : "#111011",
        borderTop: mode ? "2px solid white" : "2px solid black"
    }

  return (
    <div className='footer text-center' style={styles}>
      <h1><span>React</span> Movie<span>4free</span> Made by: Regie Amador <i className='bx bxs-dizzy bx-spin'></i></h1>
      <a href="#"><i className='bx bx-up-arrow-circle upArrow'></i></a>
    </div>
  )
}

export default Footer
