import React from 'react';

import Brand from '../assets/Brand';

export default class MapView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container">
            <Brand />
            <Map />
            <Footer />
        </div>)
    }
}

class Map extends React.Component {
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

class Footer extends React.Component {
    render() {
        return <div className="footer">

        </div>
    }
}