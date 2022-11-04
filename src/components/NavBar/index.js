import React from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo 
            to='/'
            onClick={toggleHome}
          >
            Shing Chong Store
          </NavLogo>
          <MobileIcon
            onClick={toggle}
          >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-20}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='photo'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-20}
              >
                Photo Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
               to='footer'
               smooth={true} 
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-20}
              >
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar