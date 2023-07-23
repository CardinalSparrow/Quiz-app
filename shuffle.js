function shuffle() {
  quizData.sort(()=> Math.random()-0.5)
}
// Shuffle the questions array
const shuffledQuestions = shuffle(quizData);

// Set the current question index to 0
let currentQuestionIndex = 0;

