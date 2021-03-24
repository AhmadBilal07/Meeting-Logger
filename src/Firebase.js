import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC4vG-ZfiAsdA22QuVdCthYizPte4jMT9U",
  authDomain: "meeting-logger07.firebaseapp.com",
  databaseURL: "https://meeting-logger07-default-rtdb.firebaseio.com",
  projectId: "meeting-logger07",
  storageBucket: "meeting-logger07.appspot.com",
  messagingSenderId: "250340798165",
  appId: "1:250340798165:web:e64a66fac9a16f3b4afc5c",
  measurementId: "G-D5YHMN1EQ9"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
