import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./global-styles"
import { FirebaseContext } from './context/firebase';
const config = {
    apiKey: "AIzaSyAQNZdENeJ0HwYTbwHGODDr42FI5WdMu_I",
    authDomain: "netflix-mani.firebaseapp.com",
    databaseURL: "https://netflix-mani-default-rtdb.firebaseio.com",
    projectId: "netflix-mani",
    storageBucket: "netflix-mani.appspot.com",
    messagingSenderId: "699314225104",
    appId: "1:699314225104:web:3a61f06bd4b650bc2ac3d5",
    measurementId: "G-K9QNR62CCL"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);


reportWebVitals();
