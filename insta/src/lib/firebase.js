// read this firestore
// import {seedDatabase} from '../seed';
const config = {
    apiKey: "AIzaSyC_EAkIbFx7O4IUUXt-yQnUhcQgjKELuBc",
    authDomain: "insta-f3560.firebaseapp.com",
    databaseURL: "https://insta-f3560-default-rtdb.firebaseio.com",
    projectId: "insta-f3560",
    storageBucket: "insta-f3560.appspot.com",
    messagingSenderId: "822704703941",
    appId: "1:822704703941:web:c1cafc149f79d40de463ac"
  };

  const firebase = window.firebase.initializeApp(config);
  // FieldValue is useful to make modification to data
  const {FieldValue} = window.firebase.firestore;

//   seedDatabase(firebase);

  export {firebase, FieldValue};