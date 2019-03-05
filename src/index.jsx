import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/appContainer';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';

const render = () => {
    ReactDOM.render( <AppContainer /> , document.getElementById('root'));
}
// ReactDOM.render( <App /> , document.getElementById('root'));

  store.subscribe(render); 

render();
serviceWorker.unregister();