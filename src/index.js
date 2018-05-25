import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css'

import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route} from 'react-router-dom'
import isEnabled from './app/isEnabled'

ReactDOM.render(
    <HashRouter>
<Route path = '/' component={isEnabled()}/>
</HashRouter>,
 document.getElementById('root'));
registerServiceWorker();
