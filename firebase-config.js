  // Firebase 설정 객체 (Firebase Console에서 복사한 값으로 교체)
  const firebaseConfig = {
    apiKey: "AIzaSyD1LyzOvjdWBJYT3sn_J6jrrWwsZEacEsk",
    authDomain: "dictate-a704e.firebaseapp.com",
    projectId: "dictate-a704e",
    storageBucket: "dictate-a704e.firebasestorage.app",
    messagingSenderId: "920170290019",
    appId: "1:920170290019:web:fbaa92923ec620e0429156"
  };

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firestore 초기화
const db = firebase.firestore();
