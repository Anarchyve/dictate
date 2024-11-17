document.addEventListener("DOMContentLoaded", async () => {
  const sentenceElement = document.getElementById("daily-sentence");
  const sentencesRef = db.collection("sentences");

  try {
      const snapshot = await sentencesRef.get();
      const sentences = snapshot.docs.map((doc) => doc.data().text);

      if (sentences.length > 0) {
          const randomIndex = Math.floor(Math.random() * sentences.length); // 진짜 랜덤 인덱스 생성
          sentenceElement.textContent = sentences[randomIndex];
      } else {
          sentenceElement.textContent = "No sentences available!";
      }
  } catch (error) {
      console.error("Error fetching sentences: ", error);
      sentenceElement.textContent = "Error loading sentence.";
  }
});
