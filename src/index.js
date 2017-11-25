import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Splash from './splash/Splash.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Splash />, document.getElementById('root'));
registerServiceWorker();
