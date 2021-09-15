import React from 'react'
import { MenuCard, MenuCardBtn, MenuCardContent, MenuCardImg } from './MenuElements'

const MenuItem = ({header, paragraph, url}) => {
    return (
        <div>
            <MenuCard>
                <MenuCardContent id="content">
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
                    <MenuCardBtn href='#'>Place Order</MenuCardBtn>
                </MenuCardContent>
                <MenuCardImg>
                    <img src={url} alt="ramen"></img>
                </MenuCardImg>
            </MenuCard>
        </div>
    )
}

export default MenuItem
