import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyB78IHkxmdpCzs5qQ7pSSbW2-wcbGja7og",
  authDomain: "wily-app-e45e2.firebaseapp.com",
  databaseURL: "https://wily-app-e45e2.firebaseio.com",
  projectId: "wily-app-e45e2",
  storageBucket: "wily-app-e45e2.appspot.com",
  messagingSenderId: "303755517883",
  appId: "1:303755517883:web:a4167cb1b67cd016c36e9e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();