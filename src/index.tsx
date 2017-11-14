import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
import 'chartist/dist/chartist.min.css';
import 'font-awesome/css/font-awesome.css';

import { Main } from './app/components/main/main';

import './index.scss';

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
