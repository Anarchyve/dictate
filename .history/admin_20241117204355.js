import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

const sentenceInput = document.getElementById("sentenceInput");
const displayDate = document.getElementById("displayDate");
const addButton = document.getElementById("addButton");
const sentenceList = document.getElementById("sentenceList");

// 문장 추가
addButton.addEventListener("click", async () => {
  const content = sentenceInput.value;
  const date = displayDate.value;

  if (content && date) {
    await addDoc(collection(db, "sentences"), { content, display_date: date });
    sentenceInput.value = "";
    displayDate.value = "";
    loadSentences();
  } else {
    alert("문장과 날짜를 입력하세요.");
  }
});

// 문장 목록 로드
async function loadSentences() {
  sentenceList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "sentences"));
  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().display_date}: ${doc.data().content}`;
    sentenceList.appendChild(li);
  });
}

loadSentences();
