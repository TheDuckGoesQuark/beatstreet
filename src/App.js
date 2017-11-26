import React, {Component} from 'react';

import SpotifyPlayer from './musicPlayer/SpotifyPlayer'
import Splash from './splash/Splash'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false
        }
    }

    handleLogin() {
        this.setState({loggedin:true})
    }

    render() {
        return (
            <div>
                {this.state.loggedin ? <SpotifyPlayer />: <Splash onlog ={()=>{this.handleLogin()}}/>}
            </div>
        );
    }
}

export default App;
