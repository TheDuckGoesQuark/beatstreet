import React, {Component} from 'react';

import MapView from './mapview/Mapview'
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
                {this.state.loggedin ? <div className="App"><MapView /></div> : <Splash onlog ={()=>{this.handleLogin()}}/>}
            </div>
        );
    }
}

export default App;
