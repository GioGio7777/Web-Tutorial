import React from 'react'
import Hero from '../Components/Hero'
import {Header} from '../Components/Header';
import Image from '../images/image2.jpg'
import { usePalette } from 'react-palette'
import {motion} from 'framer-motion'
import { animationOne, transition } from '../animations';


export const Services = () => {
  
  const { data, loading, error } = usePalette(Image)
  return (
  
    <motion.div
    initial="out" animate = "in" exit="out" variants = {animationOne} transition={transition}>

    
    <Header/>
    <Hero image={Image} title = "Nature" description="Once in a life time" button="Experience" color = {data.vibrant} />

    </motion.div>
  
  )
}
