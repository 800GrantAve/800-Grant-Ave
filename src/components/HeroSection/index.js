import React from 'react';
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
} from './HeroElements';
import Image from '../../images/jade-fon-chinatown.jpg';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <ImgBg src={Image} />
      </HeroBg>
      <HeroContent>
        <HeroH1>The History of 800 Grant Ave. San Francisco</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
