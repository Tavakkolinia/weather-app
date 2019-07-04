import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { location, forecasts } from './data/forecast.json';

ReactDOM.render(
  <App location={location} forecasts={forecasts} />,
  document.getElementById('root')
);
