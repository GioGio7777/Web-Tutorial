import React from 'react'
import styled from 'styled-components'
import {Switch,Route} from 'react-router-dom'

const Container = styled.div`
display:flex;
flex-direction:column;
`

const LogoSection = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:290px;
height: calc(100%-560px);

img{
    width:277px;
    height:92px;
    margin-top:auto;
}
`

const Form = styled.div`

`

const SearchSection = styled.div`
padding:20px;
display:flex;
justify-content:center;
flex-direction:column;
`
const Search = styled.div`
display:flex;
align-items:center;
padding:0px 14px;
background:#fff;
border: 1px solid #dfe1e5;
box-shadow:none;
border-radius: 24px;
z-index:3;
height:44px;
margin:0 auto;
max-width:584px;
`

const SearchIcon = styled.div`
color:#9aa0a6;
height:30px;
width:30px;
padding-right:10px;
display:flex;
align-items:center;

& svg{
    fill: #9aa0a6
}
`
const MicIcon = styled.div`color:#9aa0a6;
cursor:pointer;
width:30px;
border:0;
background:transparent;
width:40px;
padding:0 8px;
line-height:44px;
height:44px;
display:flex;
align-items:center;

& svg{
    fill: #9aa0a6
    height:24px;
    width:24px;
}`

const SearchInput = styled.input`
display:flex;
flex:1;
height:40px;
background:trasparent;
border:none;
margin:0;
padding:0;
color: rgba(0,0,0,0.87);
outline:none;
height:34px;
font-size:16px;
`
const ButtonSection = styled.div`
display:flex;
justify-content:center;
height:70px;
padding-top: 18px;
top: 53px;
z-index:0;


button{
background-color:#f8f9fa;
border:1px solid #f8f9fa;
border-radius:4px;
color:#3c4043;
font-size:14px;
margin:11px 4px;
padding: 0 16px; 
line-height:27px;
height:36px;
min-width:54px;
text-align:center;
cursor:pointer;
user-select:none;
}
`


function Home() {
  return (
    <Container>
        <LogoSection>
             <img 
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
              alt='logo'/>
        </LogoSection>

        <SearchSection>
            <Form action="/" method="GET" role="search">
            <Search>
                <SearchIcon>
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                
                 </SearchIcon>

                 <SearchInput type = "text"/>

                 <MicIcon>
                 <svg class="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path> </path></svg>
                 </MicIcon>
            </Search>
            </Form>
            <ButtonSection>
                <button>Google Search</button>
                <button>I'm feel lucky</button>

            </ButtonSection>
        </SearchSection>
    </Container>
  )
}

export default Home