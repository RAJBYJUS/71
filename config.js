import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAWHYDTsQsn_L2CZGryzTFBuPurD81Ek50",
  authDomain: "eride-ae493.firebaseapp.com",
  projectId: "eride-ae493",
  storageBucket: "eride-ae493.appspot.com",
  messagingSenderId: "682231907904",
  appId: "1:682231907904:web:bbfbd724fe8b85971c01a5"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
