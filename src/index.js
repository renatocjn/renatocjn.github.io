import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';
import 'typeface-roboto';

import App from './App';
// import * as serviceWorker from './serviceWorker';

// import '../static/avatar_drawing.jpg';
// import '../static/avatar_ufc.png';
// import '../static/avatar_unistra.png';
// import '../static/avatar.jpg';
// import '../static/favicon.ico';
// import '../static/index.html';

const elem = document.createElement('div');
elem.id = 'root';
document.body.appendChild(elem);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
