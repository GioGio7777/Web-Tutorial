import React from 'react'
import Hero from '../Components/Hero'
import {Header} from '../Components/Header';
import Image from '../images/image1.jpg'
import { usePalette } from 'react-palette'
import {motion} from 'framer-motion'
import { animationTwo } from '../animations';


export const Home = () => {

  const { data, loading, error } = usePalette(Image)
  
  return (
    <motion.div initial="out" animate="in" exit = "out" variants = {animationTwo}>
    
    <Header/>
    <Hero image={Image} title = "Nature" description="Once in a life time" button="Experience" color = {data.darkVibrant} />

    </motion.div>
  )
}
