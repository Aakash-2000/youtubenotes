import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./reducers/rootReducer";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import firebaseConfig from "./config/config";
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from "firebase/app";

const store=createStore(rootReducer,compose(
  applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
  reduxFirestore(firebase, firebaseConfig)
));

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
