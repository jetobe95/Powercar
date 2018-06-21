import React from 'react';
import ReactDOM from 'react-dom';

import RouterPage from './Routes/routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterPage/>, document.getElementById('root'));
registerServiceWorker();
