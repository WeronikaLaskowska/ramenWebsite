import React from 'react'
import { SidebarLink, SidebarMenu, SidebarContainer, Icon } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </Icon>
      <SidebarMenu>
        <SidebarLink to="menu" smooth={true} >Menu</SidebarLink>
        <SidebarLink to='chef' smooth={true}>Our Chef</SidebarLink>
        <SidebarLink style={{ border: "none" }} to='reservations' smooth={true} >Reservations</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
