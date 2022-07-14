import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
background: url(${({ image })=> image && image}) center;
height: 100vh;
display: flex;
justify-content: flex-start;
align-items: flex-end;
margin-top: -60px;
`

const Container = styled.div`
color:#fff;
padding: 2rem;
backdrop-filter: blur(5px);
background-color: rgba(0,0,0,0.4);
margin: 2rem;
border-radius: 10px;


h1{
  font-size: clamp(2rem,8vw,5rem);
  margin-bottom: 0.5rem;
}

p{
  font-size: clamp(1rem,6vw,2.5rem);
  margin-bottom: 1rem;
}
`
const Button = styled.button`

font-size: clamp(0.8rem,4vw,1.2rem);
  padding: 0.8rem 2rem;
  color:#000;
  background-color: ${({ color })=> color && color};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover{
    transform:scale(1.1)
  }

`

const Hero = ({image , title,description,button,color}) => {
  console.log(color)
  return (
    <Section image = {image}>
      <Container >
        <h1>{title}</h1>
        <p>{description}</p>
        <Button color = {color} >{button}</Button>
      </Container>
    </Section>
  )
}

export default Hero