import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmYoiZS0ypKz_v7rzd3boNWP9Axi8JmKI",
  authDomain: "vue-blog-system-65e64.firebaseapp.com",
  projectId: "vue-blog-system-65e64",
  storageBucket: "vue-blog-system-65e64.appspot.com",
  messagingSenderId: "988607696501",
  appId: "1:988607696501:web:321e1b3e2ecc83fed9f23c",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let auth = firebase.auth();

export { db, timestamp, auth };
