import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLogo,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  LogoWrap,
  // SocialLogo,
  // SocialIcons,
  // SocialIconLink,
  WebsiteRights,
  // AffiliateLink,
  // ImgWrap,
  // Img
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                About this Project
              </FooterLink>
              <FooterLink
                to="photo"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Photo Gallery
              </FooterLink>
              <FooterLink href="mailto:info@800grantave.com">
                Contact Us: info@800grantave.com
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <LogoWrap>
              <FooterLogo
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Shing Chong & Co.
              </FooterLogo>
            </LogoWrap>
          </SocialMediaWrap>
        </SocialMedia>
        <WebsiteRights>
          800GrantAve © {new Date().getFullYear()} All rights reserved
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
