import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  aapiKey: "AIzaSyBbFCbWwkxfAMRcaJ64r3bXJiyMXXiDofM",
  authDomain: "eva-uno.firebaseapp.com",
  databaseURL: "https://eva-uno.firebaseio.com",
  projectId: "eva-uno",
  storageBucket: "eva-uno.appspot.com",
  messagingSenderId: "88084894671",
  appId: "1:88084894671:web:cfd3e10f375c8cf0"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
