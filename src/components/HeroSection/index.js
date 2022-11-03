import React from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    ImgBg, 
    HeroContent, 
    HeroH1,
    HeroH2
} from './HeroElements'
import Image from '../../images/chinatown1.jpg'


const HeroSection = () => {

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <ImgBg src={Image} />
        </HeroBg>
        <HeroContent>
            <HeroH1>The History of Shing Chong Store</HeroH1>
            <HeroH2>800 Grant Ave, San Francisco</HeroH2>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection