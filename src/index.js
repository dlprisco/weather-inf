import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz7zotXWVkwZKDBjHE01X0SBkCdLAhyBs",
  authDomain: "weather-21dbd.firebaseapp.com",
  projectId: "weather-21dbd",
  storageBucket: "weather-21dbd.appspot.com",
  messagingSenderId: "986952582890",
  appId: "1:986952582890:web:eb3980736b74f9065c7993",
  measurementId: "G-3R2XWCJ1LL"
};

// Initialize Firebase
const app_firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app_firebase);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
