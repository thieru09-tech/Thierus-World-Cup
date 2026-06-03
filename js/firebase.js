import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqeHIT9lTbHgTPkn56DzqtTVmdPz6gpos",
  authDomain: "thierus-world-cup.firebaseapp.com",
  projectId: "thierus-world-cup",
  storageBucket: "thierus-world-cup.firebasestorage.app",
  messagingSenderId: "276519211602",
  appId: "1:276519211602:web:e9fa5585809b1f40b3858b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);