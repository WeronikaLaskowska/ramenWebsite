import React from 'react'
import { MenuCard, MenuCardBtn, MenuCardContent, MenuCardImg, MenuContainer, MenuHeader } from './MenuElements'
import ramenOne from '../../images/ramen1.png'
import ramenTwo from '../../images/ramen2.png'
import ramenThree from '../../images/ramen3.png'
import ramenFour from '../../images/ramen4.png'

const index = () => {
    return (
        <>
        <MenuHeader>menu.</MenuHeader>
        <MenuContainer>
            <MenuCard onCLick="">
                <MenuCardContent id="content">
                    <h2>Miso Ramen</h2>
                    <p>Miso ramen is a Japanese noodle soup with a broth seasoned with miso and served with a variety of vegetables and garnishes. The miso broth recipe for this dish is made from a combination of the chicken base, ground pork, and vegetables.</p>
                    <MenuCardBtn href='#'>Place Order</MenuCardBtn>
                </MenuCardContent>
                <MenuCardImg>
                    <img src={ramenOne}></img>
                </MenuCardImg>
            </MenuCard>
            <MenuCard onCLick="">
                <MenuCardContent id="content">
                    <h2>Shoyu Ramen</h2>
                    <p>Shoyu ramen is a ramen noodle dish flavored with shoyu, the Japanese word for soy sauce. Shoyu is one of four types of tare used to flavor ramen broth in Japan—the other three are shio ramen, miso ramen, and tonkotsu ramen, made with pork bone broth.</p>
                    <MenuCardBtn href='#'>Place Order</MenuCardBtn>
                </MenuCardContent>
                <MenuCardImg>
                    <img src={ramenTwo}></img>
                </MenuCardImg>
            </MenuCard>
            <MenuCard onCLick="">
                <MenuCardContent id="content">
                    <h2>Tonkotsu Ramen</h2>
                    <p>Tonkotsu ramen is a Japanese noodle soup made with a pork bone broth—ton means pork and kotsu means bone. When collagen-rich pig parts like pork trotters and neck bones are cooked in water over high heat, the collagen in the connective tissue transforms into gelatin.</p>
                    <MenuCardBtn href='#'>Place Order</MenuCardBtn>
                </MenuCardContent>
                <MenuCardImg>
                    <img src={ramenThree}></img>
                </MenuCardImg>
            </MenuCard>
            <MenuCard onCLick="">
                <MenuCardContent id="content">
                    <h2>Shio Ramen</h2>
                    <p>Any ramen that gets its salinity and flavor primarily from salt, rather than miso or soy sauce, can be called a shio ramen. This bowl of noodles, made with a light and clear blend of chicken stock and dashi, is flavored with a solution of salt, lemon, and kombu (dried kelp).</p>
                    <MenuCardBtn href='#'>Place Order</MenuCardBtn>
                </MenuCardContent>
                <MenuCardImg>
                    <img src={ramenFour}></img>
                </MenuCardImg>
            </MenuCard>

        </MenuContainer>
        </>
    )
}

export default index
