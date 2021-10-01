import React from 'react'
import { Nav, NavLink, Bars } from './NavbarElements'
import noodles from '../../images/noodle.png'
import { motion } from 'framer-motion'

const Navbar = ({ toggle, isVisible }) => {
    let vis='';
    isVisible ? vis="block" : vis="none";
    const bounceTransition = {
        y: {
          duration: 0.4,
          yoyo: Infinity,
          ease: "easeOut",
        },
        backgroundColor: {
          duration: 0,
          yoyo: Infinity,
          ease: "easeOut",
          repeatDelay: 0.8,
        },
      }


    return (
        <div>
            <Nav>
                <NavLink as={motion.div}
                initial={{y:-1000}}
                animate={{y:0}}
                transition= {{type:'spring', stiffness:60}}
                 to='home' smooth={true}>
                    <span style={{ fontWeight: "100", fontSize: "1.8rem" }}>neko</span>Ramen</NavLink>
               
                <Bars as={motion.img} 
                transition={bounceTransition}
                animate={{
                    y: ["15%", "-15%"],
                    background: 'transparent',}} 
                onClick={toggle} src={noodles}
                style={{display: vis}}

                />
                
            </Nav>
        </div>
    )
}

export default Navbar
