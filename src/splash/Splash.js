import React, { Component } from 'react';
import './Splash.css';


class Splash extends Component {
    render() {
        return (
            <div className="Background">
                <div className="App">
                    <h1 className="App-title">BeatStreet</h1>
                    <h3 className="h3-intro">Lets get you listening...</h3>
                    <div className="Button">
                        <h2 className="Reverse-text">Log in with Spotify</h2>
                        <img className="Spotify-logo" src={require("../assets/spotifyLogo.svg")} />
                    </div>

                </div>
                <img className="skyline" src={require("../assets/london-skyline.svg")} />
            </div>
        );
    }
}

export default Splash;