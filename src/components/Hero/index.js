import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, } from './HeroElements'
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer id="home">
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Traditional<span style={{ color: "#e31837" }}> Japanese</span> Ramen</HeroH1>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
