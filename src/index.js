import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'

const config = {
  apiKey: 'AIzaSyC_PkIfafSI351FWSiOcBcOeHxjiuiWWWs',
  authDomain: 'netflix-clayton-r-clone.firebaseapp.com',
  projectId: 'netflix-clayton-r-clone',
  storageBucket: 'netflix-clayton-r-clone.appspot.com',
  messagingSenderId: '304906897915',
  appId: '1:304906897915:web:33f7d3cd0a5669ef45235e',
  measurementId: 'G-X7709M066T',
}
// eslint-disable-next-line
const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
