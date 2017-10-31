import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavDiv = styled.div`
    text-align: center;
    font-size 24px;
    font-family: 'Josefin Sans', sans-serif;    
`


const NavBar = () => {
    return (
        <NavDiv>
            <Link to="/">All Artists</Link>
        </NavDiv>
    )

}

export default NavBar
