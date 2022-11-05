import React from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    ImgBg, 
    HeroContent, 
    HeroH1,
    HeroH2
} from './HeroElements'
import Image from '../../images/clay_and_grant3.jpg'


const HeroSection = () => {

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <ImgBg src={Image} />
        </HeroBg>
        <HeroContent>
            <HeroH1>Learn About < br/> 800 Grant Avenue, <br /> San Francisco</HeroH1>
            <HeroH2>The History of <br /> Shing Chong & Co. <br /> and the corner of <br /> Grant Ave & Clay St</HeroH2>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection