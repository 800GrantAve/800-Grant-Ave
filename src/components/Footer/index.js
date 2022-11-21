import React from 'react'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    // SocialLogo,
    // SocialIcons,
    // SocialIconLink,
    WebsiteRights,
    // AffiliateLink,
    // ImgWrap,
    // Img
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer id='footer'>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>
                        <FooterLink
                           to='about'
                           smooth={true} 
                           duration={500} 
                           spy={true} 
                           exact='true' 
                           offset={0}                            
                        >
                            About this Project
                        </FooterLink>
                        {/* <FooterLink
                           to='photo'
                           smooth={true} 
                           duration={500} 
                           spy={true} 
                           exact='true' 
                           offset={0}                            
                        >
                            Photo Gallery
                        </FooterLink> */}
                    </FooterLinkTitle>
                    <FooterLink href="mailto:info@800grantave.com">Contact Us: info@800grantave.com</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <WebsiteRights>Goals and Assists © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>
</FooterContainer>
  )
}

export default Footer