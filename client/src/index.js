import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//getting all info and putting in the dom

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
