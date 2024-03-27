import React, { useState } from "react"
import { NavLink, Link} from "react-router-dom"


export default function MovieNavbar({handleMode, mode}){

    const styles = {
        backgroundColor : mode ? "#111011" : "white",
        color: mode ? "white" : "#111011",
    }

    const darkBG ={
        backgroundColor : mode ? "white" : "black"
    }

    const darkBall ={
        backgroundColor : mode ? "black" : "white"
    }

    return(
        <div className={`navBar ${mode ? "border-bottom border-white border-2":"border-bottom border-black border-2"}`} style={styles} >
            <div className="container">
                <div className="d-flex align-items-center">
                    <Link to="/" className="navBrand me-4">
                        <h1 style={styles}>Movie<span>4free</span></h1>
                    </Link>

                    <div>
                        <input type="checkbox" className="checkbox" id="checkbox"/>
                        <label style={darkBG}  onClick={handleMode} htmlFor="checkbox" className="checkbox-label">
                            <i className='bx bxs-sun'></i>
                            <i className='bx bxs-moon' ></i>
                            <span style={darkBall} className="ball"></span>
                        </label>
                    </div>
                </div>

                
                <div className="navLinks">
                    <div className="links">
                        <NavLink to="/" style={styles}><h3>Popular</h3></NavLink>
                        <i className='navIcons bx bxs-hot' ></i>
                    </div>
                    <div className="links">
                        <NavLink to="/top_rated" style={styles}><h3>Top Rated</h3></NavLink>
                        <i className='navIcons bx bxs-star' ></i>
                    </div>
                    <div className="links">
                        <NavLink to="/upcoming" style={styles}><h3>Upcoming</h3></NavLink>
                        <i className='navIcons bx bxs-alarm-exclamation'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}