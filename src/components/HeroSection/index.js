import React from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    ImgBg, 
    HeroContent, 
    HeroH1,
    HeroH2
} from './HeroElements'
import Image from '../../images/asianimage5.jpg'


const HeroSection = () => {

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <ImgBg src={Image} />
        </HeroBg>
        <HeroContent>
            <HeroH1>Learn More About < br/> 800 Grant Avenue, San Francisco</HeroH1>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection