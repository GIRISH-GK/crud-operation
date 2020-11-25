
import  firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBMP93vLaYNwQde7RsS0zoliBuE3gU5Fq4",
    authDomain: "react-crud-d2107.firebaseapp.com",
    databaseURL: "https://react-crud-d2107.firebaseio.com",
    projectId: "react-crud-d2107",
    storageBucket: "react-crud-d2107.appspot.com",
    messagingSenderId: "215805971674",
    appId: "1:215805971674:web:a5ac6bb6c73a5551a629e3"
  };
  // Initialize Firebase
  var fireDb =firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();