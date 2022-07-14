import React,{useState} from 'react'
import { HeroContainer, HeroBG, VideoBG,HeroH1,HeroContent,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements';
import Video from'../../videos/data.mp4'

import { Button } from './../ButtonElement';

function HeroSection() {

    const [hover,setHover] = useState(false)

    const onHover = ()=> {
        setHover(!hover)
    }
  return (
    <HeroContainer id = "home">
        <HeroBG>
            <VideoBG autoPlay loop muted src ={Video} type = 'video/mp4'/>
        </HeroBG>

        <HeroContent>

            <HeroH1>Virtual Banking Made Easy</HeroH1>

            <HeroP>
                Sign up for a new account today and receive $250 in credit 
                towards your next payment
            </HeroP>

            <HeroBtnWrapper>
                <Button to ="signup"onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark = "true"> Get Started  {hover? <ArrowForward/> : <ArrowRight/>} </Button>
            </HeroBtnWrapper>
        
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection