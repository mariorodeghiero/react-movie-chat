import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAHD07m6qNx_9czG0N_ZvfVZTfGePkRKJM",
  authDomain: "movie-chat-app-555a2.firebaseapp.com",
  databaseURL: "https://movie-chat-app-555a2.firebaseio.com",
  projectId: "movie-chat-app-555a2",
  storageBucket: "movie-chat-app-555a2.appspot.com",
  messagingSenderId: "314785466156",
  appId: "1:314785466156:web:8dbf33b3eae431f8e0ce89",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database()