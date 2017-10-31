import React from 'react';
import Song from "./Song"
import styled from "styled-components"

const SongDiv = styled.div`
text-align: center;
font-size 24px;
font-family: 'Josefin Sans', sans-serif;    
`


const SongList = (props) => {
    return (
        <SongDiv>
            <h4>All Songs: </h4>
            {
               props.songs.map((song) => {
                   return (
                       <Song song={song}/>
                   )
               })
            }
        </SongDiv>
    )
}

export default SongList