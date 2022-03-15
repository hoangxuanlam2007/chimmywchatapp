import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyA9ttySJn2iN3ma5sszxsa60--hBkaIJL4",
  authDomain: "chimmywchat-app.firebaseapp.com",
  projectId: "chimmywchat-app",
  storageBucket: "chimmywchat-app.appspot.com",
  messagingSenderId: "310617427839",
  appId: "1:310617427839:web:31e562c51dbc1a1128144a"
}).auth()