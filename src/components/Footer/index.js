import React from 'react'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink
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
                    <FooterLink href="mailto:info@800grantave.com">Contact Us</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
    </FooterWrap>
</FooterContainer>
  )
}

export default Footer