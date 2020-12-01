import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig    = {
    apiKey:             "",
    authDomain:         "",
    databaseURL:        "",
    projectId:          "d",
    storageBucket:      "",
    messagingSenderId:  "",
    appId:              "1",
    measurementId:      ""
  };

  const firebaseApp     = firebase.initializeApp(firebaseConfig);
  const db              = firebaseApp.firestore();
  const auth            = firebase.auth();
  const provider        = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
