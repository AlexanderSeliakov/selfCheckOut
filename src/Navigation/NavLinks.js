import React from 'react'

import './NavLinks.css'
import NavItem from './NavItem'

function NavLinks() {
    return (
        <ul className='NavItems'>
            <NavItem to='/burgers'>
                Burgers
           </NavItem>
            <NavItem to='/drinks'>
                Drinks
           </NavItem>
            <NavItem to='/snacks'>
                Snacks
           </NavItem>
        </ul>

    )
}

export default NavLinks
