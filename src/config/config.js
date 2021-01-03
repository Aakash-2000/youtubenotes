  // Your web app's Firebase configuration
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";

  var firebaseConfig = {
    apiKey: "AIzaSyCaN_6BFCO9ibAp6rX6_ya2SCAFH4h27uU",
    authDomain: "utubenotes-85f03.firebaseapp.com",
    databaseURL: "https://utubenotes-85f03.firebaseio.com",
    projectId: "utubenotes-85f03",
    storageBucket: "utubenotes-85f03.appspot.com",
    messagingSenderId: "810411962665",
    appId: "1:810411962665:web:c069a3cd86836947014738"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;