
import React from 'react'
import { NavLink, Link } from "react-router-dom"


export default function Home() {

    return (
        <div>
            <nav className="navBar">
                <div className="navText">
                    <h5>LAMBDA EATS</h5>
                </div>
                <div>
                    <NavLink className="navLinks" exact to="/">Home</NavLink>
                    <NavLink className="navLinks" to="/help">Help</NavLink>
                </div>
            </nav>
            <banner className="homeBanner">
                <h5>Your favorite food, delivered while coding</h5>
                <Link to="/pizza"><button>Pizza?</button></Link> 
            </banner>
        </div>
    )
}
