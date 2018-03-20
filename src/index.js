import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Firebase config
firebase.initializeApp({
    apiKey: "AIzaSyAGVCC_M8OEp85O387NcQ9GEZ_tRVZ9pmk",
    authDomain: "instacoon-67862.firebaseapp.com",
    databaseURL: "https://instacoon-67862.firebaseio.com",
    projectId: "instacoon-67862",
    storageBucket: "instacoon-67862.appspot.com",
    messagingSenderId: "410066668531"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
