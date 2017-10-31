import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios"

import NavBar from "./components/NavBar";
import ArtistList from "./components/ArtistList"
import Artist from "./components/Artist"
import styled from "styled-components"

const TitleDiv = styled.div`
font-family: 'Paytone One', sans-serif;
font-size: 36px;
text-align: center;
margin-bottom: 10px;
`

class App extends Component {

  state = {
    artists: []
  }

  async componentWillMount() {

    try {
      const response = await axios.get("/api/artists")
      this.setState({artists: response.data})
    } catch (error) {
      console.log(error)
    }

  }


  render() {

    const ArtistListComponent = () => (<ArtistList artists={this.state.artists} />)


    return (
      <Router>
        < div className="App">
          <TitleDiv>Tunr</TitleDiv>
          <hr />
          <NavBar />

          <Switch>
            <Route exact path="/" render={ArtistListComponent} />
            <Route exact path="/artists/:artistId" component={Artist} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
