import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
    
        <div className='navbar'>
            <h1>
                Upskill Nandu
            </h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            

        </div>
    )
}

export default Navbar 
