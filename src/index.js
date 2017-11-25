import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import './index.css';
import Splash from './splash/Splash.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
