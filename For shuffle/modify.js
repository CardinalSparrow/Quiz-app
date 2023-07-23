function loadQuestion(question) {
  // Modify the question text and choices to use the shuffled array
  questionEl.textContent = (currentQuestionIndex + 1) + '. ' + question.question;
  choiceEls.forEach((choiceEl, index) => {
    choiceEl.textContent = question.choices[index];
  });

  // Reset the selected choice and enable the next button
  selectedChoice = null;
  nextBtn.disabled = true;
}

// Start the quiz
function startQuiz() {
  // Shuffle the questions array
  const shuffledQuestions = shuffle(quizData);

  // Set the current question index to 0
  currentQuestionIndex = 0;

  // Display the first question
  loadQuestion(shuffledQuestions[currentQuestionIndex]);
}
