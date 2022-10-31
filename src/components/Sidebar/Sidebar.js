import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
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
                <SidebarLink to='about'>
                    About
                </SidebarLink>
                <SidebarLink to='gallery'>
                    Photo Gallery
                </SidebarLink>
                <SidebarLink to='contact'>
                    Contact Us
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                    <SidebarRoute 
                        to="/signin"
                    >
                        Login
                    </SidebarRoute>
                </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar