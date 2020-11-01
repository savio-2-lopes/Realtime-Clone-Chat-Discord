import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig    = {
    apiKey:             "AIzaSyDI9xx7s6b6WSImKw7l1r3HrUTeEhMLriA",
    authDomain:         "discord-clone-f6ccb.firebaseapp.com",
    databaseURL:        "https://discord-clone-f6ccb.firebaseio.com/",
    projectId:          "discord-clone-f6ccb",
    storageBucket:      "discord-clone-f6ccb.appspot.com",
    messagingSenderId:  "39341495257",
    appId:              "1:39341495257:web:482d5bd26836a053d67fc8",
    measurementId:      "G-NY7H0003VQ"
  };

  const firebaseApp     = firebase.initializeApp(firebaseConfig);
  const db              = firebaseApp.firestore();
  const auth            = firebase.auth();
  const provider        = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;