import styled from "styled-components";
import { Link } from 'react-scroll';


export const SidebarContainer = styled.aside`
position:fixed;
z-index:10;
width: 100%;
height: 300px;
background: #070504; 
display:flex; 
flex-direction: column;
align-items: center;
justify-content: center;
top:0;
transition: right  0.3 ease-in-out;
right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

@media screen and (min-width: 800px) {
    width: 350px;
    height: 100%;
}

`
export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
cursor:pointer;
outline: none;
background: transparent;
border: none;
    svg{
        color:white;
        width:50px;
        height:50px;
        z-index:12320;
        transition:all 0.2s ease ;
        &:hover {
            transform: rotate(80deg);
        }
    }


`

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  border-bottom: dotted 1px #fff;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }

`;