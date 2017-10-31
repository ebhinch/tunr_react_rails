import React from 'react';
import styled from "styled-components";

const SongDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Josefin Sans', sans-serif;
`

const Song = (props) => {
    return (
        <SongDiv>
            {props.song.title}
            <div><audio controls src={props.song.preview_url}></audio></div>
        </SongDiv>
    );
};

export default Song;