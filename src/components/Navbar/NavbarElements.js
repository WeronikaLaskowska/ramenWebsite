import styled from "styled-components";
import { Link } from 'react-scroll';

export const Nav = styled.nav`
background:transparent;
height:80px;
display:flex;
justify-content:space-between;
font-weight: 900;
position:fixed;
top:0;
left:0;
right:0;
z-index:100000;
@media screen and (min-width:600px) {
    padding: 0 5rem;
}

`

export const NavLink = styled(Link)`
color:white;
font-size:3rem;
display:flex;
align-items:center;
text-decoration:none;
cursor:pointer;
@media screen and (max-width: 400px){
    position:absolute;
    top:10px;
    left:25px;
}
`

export const NavIcon = styled.div`
display:block;
position:absolute;
top:0;
right:0;
cursor:pointer;
color:white;
font-size:1rem;
padding-top:40px;
font-weight: 100;
display:none;

`

export const Bars = styled.img`
    width:45px;
    height: 45px;
    position:absolute;
    top:15px;
    right:20px;
    cursor:pointer;
    transform: scale(1);
    transition: all 0.5s;
    &:hover{
        transform: scale(1.2);
    }
    @media screen and (min-width:600px) {
    margin-right: 2rem;
}

`