import React from 'react';
import ReactDOM from 'react-dom';
import routes from '/home/danielmp96/powercars/src/components/global/config/routes.js';
import registerServiceWorker from './registerServiceWorker.js';

ReactDOM.render(routes,document.getElementById('root'));
registerServiceWorker();
