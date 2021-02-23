import React from 'react';
import ReactDOM from 'react-dom';
import {firebase, FieldValue} from './lib/firebase';
import FirebaseContext from './context/firebase';

ReactDOM.render(
  // wrap the children and pass the value
  <FirebaseContext.Provider value={{firebase,FieldValue}}>
  <h1 className="text-red-500">Hello World, my name is John</h1>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);


