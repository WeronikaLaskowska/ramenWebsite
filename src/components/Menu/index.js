import React from 'react'
import {MenuContainer, MenuHeader } from './MenuElements'
import MenuItem from './MenuItem'


const Menu = ({menu}) => {
 
    return (
        <>
        <MenuHeader id="menu">menu.</MenuHeader>
        <MenuContainer >
                {menu.map( (product, index) => {
                    return (
                        <MenuItem data-aos="fade-up" key={index} header={product.header} paragraph={product.paragraph} url={product.url}/>
                    )
                })}
        </MenuContainer>
        </>
    )
}

export default Menu
