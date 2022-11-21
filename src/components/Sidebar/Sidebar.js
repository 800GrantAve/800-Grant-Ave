import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    // SideBtnWrap,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer 
        isOpen={isOpen}
        onClick={toggle}
    >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink 
                    to='about' 
                    onClick={toggle}
                    offset={60}
                >
                    About
                </SidebarLink>
                <SidebarLink 
                    to='photo' 
                    onClick={toggle}
                    offset={60}
                >
                    Photo Gallery
                </SidebarLink>
                <SidebarLink 
                    to='footer' 
                    onClick={toggle}
                    offset={60}
                >
                    Contact Us
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar