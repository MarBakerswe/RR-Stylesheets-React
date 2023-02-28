import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example';
import Sidebar from './Sidebar';
import Posts from './Posts';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Example />
    <Sidebar />
    <Posts />
  </React.StrictMode>,
  document.getElementById('root')
);

