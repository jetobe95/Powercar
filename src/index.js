import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import RouterPage from './Routes/routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterPage/>, document.getElementById('root'));
registerServiceWorker();
