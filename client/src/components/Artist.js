import React, { Component } from 'react';
import axios from "axios";
import SongList from "./SongList"
import styled from "styled-components"
import { FlexRow } from "../styled-components/FlexContainers";

const ArtistPic = FlexRow.extend`
    align-items:center;
    justify-content: center;
`

const ArtistDiv = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
`

const ArtistDivText = styled.div`
text-align: center;
font-size 24px;
font-family: 'Josefin Sans', sans-serif;    
`

class Artist extends Component {

// there are many ways to retrieve this clientInformation. we are going to make api call
state = {
    // default state for an object is an empty object {}
    artist: {},
    songs: []
}

async componentWillMount(){
    try {
        // api endpoint: /api/artists/:artist_id
        const { artistId } = this.props.match.params
        const response = await axios.get(`/api/artists/${artistId}`)

        this.setState({artist: response.data})


    } catch(error) {
        console.log(error)
    }
    try {
        const {artistId} = this.props.match.params
        const response = await axios.get(`/api/artists/${artistId}/songs`)
        this.setState({songs: response.data})
    } catch(error) {
        console.log(error)
    }
}

    render() {
        return (
            <div>
               <ArtistDiv>
               <ArtistPic><img src={this.state.artist.photo_url} /></ArtistPic>
               <ArtistDivText><h2>{this.state.artist.name}</h2>
               <h3>{this.state.artist.nationality}</h3></ArtistDivText>
            </ArtistDiv>
            <SongList songs={this.state.songs} /> 
            </div>
        );
    }
}

export default Artist;


{/* <pre>{JSON.stringify(this.state.artist)}</pre> */}