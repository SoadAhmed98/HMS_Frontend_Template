import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

// axios.defaults.baseURL = 'http://localhost/api'
// axios.defaults.baseURL = 'https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io'


// register Swiper custom elements
register();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
