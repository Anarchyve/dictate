import { db } from "./firebase-config.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const quoteDisplay = document.getElementById("quoteDisplay");

// 오늘의 문장 표시
async function displayTodayQuote() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD 포맷
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