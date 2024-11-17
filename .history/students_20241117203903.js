// student.js
import { db } from "./firebase.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const quoteDisplay = document.getElementById("quoteDisplay");

async function displayTodayQuote() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const q = query(collection(db, "sentences"), where("display_date", "==", today));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    quoteDisplay.textContent = doc.data().content;
  } else {
    quoteDisplay.textContent = "오늘의 문장이 없습니다!";
  }
}

displayTodayQuote();
