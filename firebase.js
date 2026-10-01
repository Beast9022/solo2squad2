
const firebaseConfig = {
  apiKey: "AIzaSyBqmcpEeIq3G6iT2h__Fwg5THvQhjk91VU",
  authDomain: "solo2squad-a498f.firebaseapp.com",
  projectId: "solo2squad-a498f",
  storageBucket: "solo2squad-a498f.firebasestorage.app",
  messagingSenderId: "771548427429",
  appId: "1:771548427429:web:5edc6714f155e945c4094c",
  measurementId: "G-0YFCK4PHKR"
};

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


export { db, auth };