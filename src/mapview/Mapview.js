import React from 'react';

import Brand from '../assets/Brand';
import ReactMapboxGl, {Layer, Marker} from 'react-mapbox-gl'
import './Mapview.css'

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoiam1hY2tpZTk3IiwiYSI6ImNqYWZuNXRmNjEzcm4yd3BicWtxdGJ0d3EifQ.xOgBLsHRujHPor8Fp1wBiQ",
    interactive: false,
    minZoom: 18,
    maxZoom: 18
});

export default class MapView extends React.Component {
    render() {
        return (<div className="container">
            <MapWrapper />
        </div>)
    }
}

class MapWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: 0,
            latitude: 0,
            success: true,
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((pos) => {
            let coords = pos.coords;
            this.setState({longitude: coords.longitude, latitude: coords.latitude})
        });
    }

    render() {
        const marker = <Marker coordinates={[this.state.longitude, this.state.latitude]}/>;
        return <Map
            center={[this.state.longitude, this.state.latitude]}
            movingMethod="easeTo"
            style="mapbox://styles/jmackie97/cjafuc2397fki2snwdfereeko">
            {marker}
        </Map>
    }
}
