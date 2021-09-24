import React from 'react'
import { Nav, NavLink, Bars } from './NavbarElements'
import noodles from '../../images/noodle.png'

const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <NavLink to='home' smooth={true}>
                    <span style={{ fontWeight: "100", fontSize: "1.8rem" }}>neko</span>Ramen</NavLink>

                <Bars onClick={toggle} src={noodles} />
            </Nav>
        </div>
    )
}

export default Navbar
