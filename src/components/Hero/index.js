import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { motion } from 'framer-motion'
import { HeroContainer, HeroContent, HeroItems, HeroH1, } from './HeroElements'
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible]=useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
        setIsVisible(!isVisible);
    };

    return (
        <HeroContainer id="home">
            <Navbar toggle={toggle} isVisible={isVisible} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1 as={motion.h1} 
                    animate={{ x:0 }} 
                    initial={{x:-1000}} 
                    transition={{ type: 'spring', stiffness: 70}}>Traditional<span style={{ color: "#e31837" }}> Japanese</span> Ramen</HeroH1>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
