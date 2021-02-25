// read this firestore
// import {seedDatabase} from '../seed';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyC_EAkIbFx7O4IUUXt-yQnUhcQgjKELuBc",
    authDomain: "insta-f3560.firebaseapp.com",
    databaseURL: "https://insta-f3560-default-rtdb.firebaseio.com",
    projectId: "insta-f3560",
    storageBucket: "insta-f3560.appspot.com",
    messagingSenderId: "822704703941",
    appId: "1:822704703941:web:c1cafc149f79d40de463ac"
  };
// const config = {
//   apiKey: 'AIzaSyBzbDVpXMNirX9Frhm465m0vUFTNQhHM1w',
//   authDomain: 'instagram-e8841.firebaseapp.com',
//   databaseURL: 'https://instagram-e8841.firebaseio.com',
//   projectId: 'instagram-e8841',
//   storageBucket: 'instagram-e8841.appspot.com',
//   messagingSenderId: '1052235904858',
//   appId: '1:1052235904858:web:eac84ef7c0e15590916563'
// };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;
export { firebase, FieldValue };


//   seedDatabase(firebase);

