import React from 'react'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    // FooterLink,
    // SocialMedia,
    // SocialMediaWrap,
    // SocialLogo,
    // SocialIcons,
    // SocialIconLink,
    // WebsiteRights,
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
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
    </FooterWrap>
</FooterContainer>
  )
}

export default Footer