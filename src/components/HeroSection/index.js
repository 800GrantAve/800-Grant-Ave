import React from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    ImgBg, 
    HeroContent, 
    HeroH1, 
    HeroP
} from './HeroElements'
import Image from '../../images/jade.jpg'


const HeroSection = () => {

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <ImgBg src={Image} />
        </HeroBg>
        <HeroContent>
            <HeroH1>Shing Chong</HeroH1>
            <HeroP>
                Take a look around
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection