import React, { Component } from 'react';
import Slider from 'react-viewport-slider';
import { Card, CardImg, CardText,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import './SpotifyPlayer.css';
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";

class SpotifyPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {playSwitch:  true, image: play};
    }
    pressSwitch(){
        if (this.state.playSwitch) {
            this.setState({playSwitch: false, image: pause});
        }
        else {
            this.setState({playSwitch: true, image: play});
        }
    }
    render() {
        return (

            <Slider>
                <Slider.Item buttonLabel={'More Songs'} hideButton={true}>
                    <div className="Background">
                        <div className="Bar">
                            <div className="ButtonHolder">
                                <img className="Play" onClick={() => this.pressSwitch()} src={this.state.image} />
                            </div>
                            <img className="Album" src={require("../assets/duffy.PNG")} />
                            <div className="MediaInfo">
                                <h1>Street</h1>
                                <h1>Song Title</h1>
                                <h2>Artist Name</h2>
                            </div>
                        </div>
                        <img className="SmallButton" src={require("../assets/arrow.svg")} />
                    </div>
                </Slider.Item>
                <Slider.Item style={{ backgroundColor: '#526077' }}>
                    <h1>Street</h1>
                    <Card body inverse style={{margin:'5px', borderRadius: 15 ,width: '90%', backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle style={{marginLeft:'5%'}}>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card body inverse style={{margin:'5px', borderRadius: 15 ,width: '90%', backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle style={{marginLeft:'5%'}}>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card body inverse style={{margin:'5px', borderRadius: 15 ,width: '90%', backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle style={{marginLeft:'5%'}}>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card body inverse style={{margin:'5px', borderRadius: 15 ,width: '90%', backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle style={{marginLeft:'5%'}}>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>


                </Slider.Item>
            </Slider>
        );
    }
}
export default SpotifyPlayer;