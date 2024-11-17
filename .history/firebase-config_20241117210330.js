import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUj6exQPXCZ6GrfypsVZ1JmQUF7YvHpv0",
  authDomain: "dictate-6881b.firebaseapp.com",
  projectId: "dictate-6881b",
  storageBucket: "dictate-6881b.appspot.com",
  messagingSenderId: "174868283166",
  appId: "1:174868283166:web:800b44c9fa1d875a10930f",
  measurementId: "G-39B9D1MWCR",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
