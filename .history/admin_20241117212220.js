document.addEventListener("DOMContentLoaded", () => {
  const sentenceForm = document.getElementById("sentence-form");
  const sentenceInput = document.getElementById("sentence-input");
  const sentenceList = document.getElementById("sentence-list");

  // Mock data: Array to store sentences temporarily
  const sentences = [];

  // Handle form submission
  sentenceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newSentence = sentenceInput.value.trim();
    if (newSentence) {
      sentences.push(newSentence);
      sentenceInput.value = "";

      // Update the list display
      updateSentenceList();
    }
  });

  // Function to update the sentence list display
  function updateSentenceList() {
    sentenceList.innerHTML = ""; // Clear the list
    sentences.forEach((sentence, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${sentence}`;
      sentenceList.appendChild(li);
    });
  }
});
