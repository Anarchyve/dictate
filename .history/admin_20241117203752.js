// admin.js
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const sentenceInput = document.getElementById("sentenceInput");
const addButton = document.getElementById("addButton");
const sentenceList = document.getElementById("sentenceList");

addButton.addEventListener("click", async () => {
  const content = sentenceInput.value;
  if (content) {
    await addDoc(collection(db, "sentences"), { content, date_added: new Date() });
    sentenceInput.value = "";
    loadSentences();
  }
});

async function loadSentences() {
  sentenceList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "sentences"));
  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().content;
    sentenceList.appendChild(li);
  });
}

loadSentences();
