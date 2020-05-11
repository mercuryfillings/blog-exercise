import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">Whichfork?</NavLink>
                <div className="links">
                    <NavLink className="link" to="/articles">Articles</NavLink>
                    <NavLink className="link" to="/add-article">Add Article</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav