document.addEventListener("DOMContentLoaded", () => {
  const sentenceElement = document.getElementById("daily-sentence");

  // Mock data: Replace this with data fetched from Firebase later
  const sentences = [
    "Believe in yourself.",
    "Every journey begins with a single step.",
    "Hard work pays off.",
    "Dream big, and dare to fail."
  ];

  // Display a random sentence
  const randomIndex = new Date().getDate() % sentences.length;
  const sentenceOfTheDay = sentences[randomIndex];
  sentenceElement.textContent = sentenceOfTheDay;
});
