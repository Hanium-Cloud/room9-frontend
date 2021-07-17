import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './thirdparty/iamport/jquery-3.6.0.min.js';
import './thirdparty/iamport/iamport.payment-1.1.5.js';

import 'antd/dist/antd.css';
import './index.css';

IMP.init('imp51891266');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
