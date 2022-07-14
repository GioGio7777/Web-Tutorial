import React from 'react'
import Hero from '../Components/Hero'
import {Header} from '../Components/Header';
import Image from '../images/image3.jpg'
import { usePalette } from 'react-palette'
import {motion} from 'framer-motion'
import { animationThree } from '../animations';


export const About = () => {
  const { data, loading, error } = usePalette(Image)

  return (
    <motion.div initial="out" animate="end" exit = "out" variants = {animationThree}>
    <Header/>
    <Hero image={Image} title = "Nature" description="Once in a life time" button="Experience" color = {data.vibrant} />
    </motion.div>
  )
}
