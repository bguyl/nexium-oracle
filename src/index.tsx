import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

import { Main } from './app/components/main';

import './index.scss';

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
