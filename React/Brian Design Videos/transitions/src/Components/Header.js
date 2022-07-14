import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = styled.nav`
height:60px;
background:transparent;
padding:0rem calc((100vw - 1300px) * 2);
display: flex;
justify-content: space-between;
align-items: center;
`

const NavItems = styled.div`

`

const Logo = styled(Link)`
color:#fff;
padding-left: 1rem;
text-decoration: none;
font-size: 1.5rem;
font-weight:bold;
font-style: italic;
`

const NavbarLink = styled(Link)`
color:#fff;
text-decoration: none;
padding: 1rem;

`

export const Header = () => {
  return (
    <>
    <Navbar>
        <Logo to = "/">Nature</Logo>
        <NavItems>
            <NavbarLink to ="/">Home</NavbarLink>
            <NavbarLink to ="/about">About</NavbarLink>
            <NavbarLink to ="/services">Services</NavbarLink>
        </NavItems>
    </Navbar>
    </>
  )
}
