import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    // SideBtnWrap,
    // SidebarRoute
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
                    offset={-80}
                >
                    About
                </SidebarLink>
                <SidebarLink 
                    to='photo' 
                    onClick={toggle}
                    offset={-80}
                >
                    Photo Gallery
                </SidebarLink>
                <SidebarLink 
                    to='footer' 
                    onClick={toggle}
                    offset={-80}
                >
                    Contact Us
                </SidebarLink>
            </SidebarMenu>
            {/* <SideBtnWrap>
                    <SidebarRoute 
                        to="/signin"
                    >
                        Login
                    </SidebarRoute>
                </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar