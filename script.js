// Define variables
let currentQuestion = 0;
let previousQuestion = 0;
// let previousQuestion = -1;
let score = 0;
let timer;

// Define DOM elements
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const option1El = document.getElementById("option1_label");
const option2El = document.getElementById("option2_label");
const option3El = document.getElementById("option3_label");
const option4El = document.getElementById("option4_label");
const startBtn = document.getElementById("start");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const options = document.getElementById("options");
const nameT = document.getElementById("name-tag");
// const username = document.getElementById("username");
// const password = document.getElementById("password");
const logInBtn = document.getElementById("login-button");
const log = document.getElementById("log");
const ready = document.getElementById("ready");
const container = document.querySelector(".container");

date.innerHTML = new Date().getFullYear();

// Define the quiz questions and answers
let quizData = [
    {
        question: "What is the capital of Nigeria?",
        options: ["Abuja", "Lagos", "Aso rock", "Makurdi"],
        answer: 1,
        correctAnswer: false
    },
    {
        question: "Who is the first president of Nigeria?",
        options: ["Bola Ahmed Tinubu","Dr. Nnamdi Azikiwe", "Gen. Muhammadu Buhari", "Alh. Shehu Shagari"],
        answer: 2,
        correctAnswer: false
    },
    {
        question: "How many states are in Nigeria?",
        options: ["36", "50", "37", "30"],
        answer: 1,
        correctAnswer: false
    },
    {
        question: "Where is the Eiffel tower located?",
        options: ["Ontario", "London", "Paris", "Abeokuta"],
        answer: 3,
        correctAnswer: false
    },
    {
        question: "Which of this is a coastal city?",
        options: ["Enugu", "Owerri", "Lagos", "Kebbi"],
        answer: 3,
        correctAnswer: false
    }
];



// Define functions

// Show quiz questions and options
function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    option1El.innerText = currentQuiz.options[0];
    option2El.innerText = currentQuiz.options[1];
    option3El.innerText = currentQuiz.options[2];
    option4El.innerText = currentQuiz.options[3];
}


// Start the quiz and set up the timer
function startQuiz() {
    startBtn.style.display = "none";
    timerEl.innerText = "Time remaining: 60 seconds";
    displayQuestion();
    quiz.style.display = "block";
    prevBtn.style.display = "none";
    nextBtn.style.display = "inline";
    ready.style.display = "none";
    container.style.background = "rgba(25,25,25,0.3)";
    
    let timeLeft = 60;
    timer = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
        timerEl.innerText = "Time remaining: " + timeLeft + " seconds";
    }, 1000);
    
}


// Check the selected answer and update the score
function checkAnswer() {
    const selectedOption = document.querySelector('[name="option"]:checked');
    if (!selectedOption) {
        return;
    }
    const selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === quizData[currentQuestion].answer) {
        quizData[currentQuestion].correctAnswer = true;
    } else {
        quizData[currentQuestion].correctAnswer = false;
    }
}

// function checkPre() {
//     const preOption = document.querySelector('[name="previous-option"]:checked');
//     // if (!preOption) {
//     //     return;
//     // }
//     const preAnswer = parseInt(preOption.value);
//     if (preAnswer === quizData[previousQuestion].answer) {
//         alert("pre");
//         score--;
//         return;
//     }
// }

//Calculate score by checking how many of the answers are correct
function calculateScore() {
    quizData.forEach((question) => {
        if (question.correctAnswer === true) score++;
    });
}



// End the quiz and show the result
function endQuiz() {
    calculateScore();
    clearInterval(timer);
        quiz.style.display = "none";
        resultEl.style.display = "inline";
    for (let i = 0; i < users.length; i++) {
        scoreEl.innerText = `${score} out of ${quizData.length}`;
        return;
    }
}

// Load the next quiz question
function loadNextQuestion() {
    prevBtn.style.display = "inline";
    checkAnswer();
    currentQuestion++;
    if (currentQuestion === quizData.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline";
    }
    if (currentQuestion === quizData.length) {
        endQuiz();
        return;
    }
    displayQuestion();
    // let previousQuestion = currentQuestion;
}



// Load the previous quiz question
function loadPreviousQuestion() {
    // checkPre();
    currentQuestion--;
    // score--;
    
    if (currentQuestion === 0) {
        prevBtn.style.display = "none";
        // submitBtn.style.display = "inline";
        
    }
    displayQuestion();
    
}



// Handle the submit button click event
function submitQuiz() {
    checkAnswer();
    endQuiz();
}

// // Event listeners
// logInBtn.addEventListener("click",logIn);
startBtn.addEventListener("click",startQuiz);
startBtn.addEventListener("click", function(event) {
options.classList.remove("hidden")
});
nextBtn.addEventListener("click", loadNextQuestion);
prevBtn.addEventListener("click", loadPreviousQuestion);
prevBtn.addEventListener("click", function(event) {
nextBtn.style.display = "inline"
});
submitBtn.addEventListener("click", submitQuiz);


// function resetState() {
//     clearStatusClass(document.body);
//     nextBtn.classList.add('hide');
// }

