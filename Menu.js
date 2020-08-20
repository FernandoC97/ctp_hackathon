import React from "react"
import './Menu.css'

function Menu() {
    return(
        <div className="dropdown">
            <button className="dropbtn">Select</button>
            <div className="dropdown-content">
                <p>Events</p>
                <p>Websites</p>
                <p>Jobs/Internships</p>
            </div>
        </div>
    );
}

export default Menu