document.addEventListener("DOMContentLoaded", () => {
  const sentenceForm = document.getElementById("sentence-form");
  const sentenceInput = document.getElementById("sentence-input");
  const sentenceList = document.getElementById("sentence-list");

  const sentencesRef = db.collection("sentences");

  // 문장 추가
  sentenceForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const newSentence = sentenceInput.value.trim();
      if (newSentence) {
          try {
              await sentencesRef.add({ text: newSentence });
              sentenceInput.value = "";
              fetchSentences();
          } catch (error) {
              console.error("Error adding sentence: ", error);
          }
      }
  });

  // 문장 목록 가져오기
  async function fetchSentences() {
      sentenceList.innerHTML = "";
      try {
          const snapshot = await sentencesRef.get();
          snapshot.forEach((doc) => {
              const sentence = doc.data().text;
              const li = document.createElement("li");
              li.textContent = sentence;
              sentenceList.appendChild(li);
          });
      } catch (error) {
          console.error("Error fetching sentences: ", error);
      }
  }

  fetchSentences();
});
