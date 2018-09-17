import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StoreState } from './types/StoreState';
import { UpdateBarrelDataAction } from './actions';
import { reduceState } from './reducers';



const store = createStore<StoreState, UpdateBarrelDataAction, any, any>(reduceState, {
  flattenedBarrels: [{
    barrel_id: 1,
    errors: undefined,
    last_flavor_sensor_result: 'tasty',
    satellite_id: 1,
    status: 'all good',
    update_age: 100
  },
  {
    barrel_id: 2,
    errors: undefined,
    last_flavor_sensor_result: 'tasty',
    satellite_id: 1,
    status: 'all good',
    update_age: 100
  },
  {
    barrel_id: 3,
    errors: "we've got a problem",
    last_flavor_sensor_result: 'tasty',
    satellite_id: 2,
    status: 'error',
    update_age: 100
  }]
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
