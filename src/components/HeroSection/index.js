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
            <HeroH1>Shing Chong</HeroH1>
            <HeroH2>The History of <br /> 800 Grant Avenue, San Francisco</HeroH2>
            <HeroH2></HeroH2>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection