import React from 'react'
import { ChefContainer, ChefContent, ChefHeader, ChefImage } from './ChefElements'
import chefOne from '../../images/chef1.jpg'
import chefTwo from '../../images/chef2.jpg'

const Chef = () => {
    return (
        <>
        <ChefHeader>meet our Chef.</ChefHeader>
        <ChefContainer>
        <ChefImage src={chefOne}></ChefImage>
        <ChefContent>
            <h1>Osamu Tomita</h1>
            <h3>head chef.</h3>
            <p>Creativity and determination have always been the earmarks of Chef Osamu Tomita’s career.
            His world travels began at the Michelin-star La Melazane by Gourmard restaurant at the Hilton Resort in Mauritius in 2004, before moving on to spend 5 years at world-famous Lotte Hotel in Seoul, South Korea.</p>
        </ChefContent>
        </ChefContainer>

        <ChefContainer>
        <ChefImage src={chefTwo}></ChefImage>
        <ChefContent>
            <h1>Japanese Tradition</h1>
            <h3>is our main goal.</h3>
            <p>As a born Japanese man, Osamu makes sure to keep the traditional values of Japanese cuisine present in his dishes. Although they don't lack the modern twist.</p>
        </ChefContent>
        </ChefContainer>
        </>
    )
}

export default Chef
