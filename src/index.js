import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Splash from './splash/Splash.js';
import registerServiceWorker from './registerServiceWorker';
import SpotifyPlayer from "./musicPlayer/SpotifyPlayer";

ReactDOM.render(<SpotifyPlayer />, document.getElementById('root'));
registerServiceWorker();
