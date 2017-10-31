import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components"

const ArtistDiv = styled.div`
text-align: center;
font-size 24px;
font-family: 'Josefin Sans', sans-serif;    
`

const ArtistList = (props) => {
    return (
        <div>
    
            {
                props.artists.map((artist) => {
                    return (
                        <ArtistDiv>
                            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                        </ArtistDiv>
                    )
                })
            }
        </div>
    )
}

export default ArtistList