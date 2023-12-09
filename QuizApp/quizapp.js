const questions = [
  {
    question:
      "Identify the one which is used to pass data to components from outside",
    answers: [
      {
        text: "Render with arguments",
        correct: false,
      },
      {
        text: "setState",
        correct: false,
      },
      {
        text: "PropTypes",
        correct: false,
      },
      {
        text: "Props",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following is used in React.js to increase performance?",
    answers: [
      {
        text: "Virtual DOM",
        correct: true,
      },
      {
        text: "Original DOM",
        correct: false,
      },
      {
        text: "Both",
        correct: false,
      },
      {
        text: "None of the above",
        correct: false,
      },
    ],
  },
  {
    question: "Who created React.js?",
    answers: [
      {
        text: "Jordan Mike",
        correct: false,
      },
      {
        text: "Jordan Walke",
        correct: false,
      },
      {
        text: "Tim Lee",
        correct: false,
      },
      {
        text: "Jordan lee",
        correct: true,
      },
    ],
  },
  {
    question: "In which language is React.js written?",
    answers: [
      {
        text: "Python",
        correct: false,
      },
      {
        text: "Javascript",
        correct: true,
      },
      {
        text: "Java",
        correct: false,
      },
      {
        text: "PHP",
        correct: false,
      },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerElement = document.querySelector("#answer-buttons");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = answer.text;
    buttonElement.classList.add("btn");
    answerElement.appendChild(buttonElement);
    if (answer.correct) {
      buttonElement.dataset.correct = answer.correct;
    }
    buttonElement.addEventListener("click", getAnswer);
  });
};

const resetState = () => {
  nextButton.style.display = "none";

  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
};

const getAnswer = (e) => {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("inCorrect");
  }
  Array.from(answerElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });

  nextButton.style.display = "block";
};

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  if (currentQuestionIndex === 0) {
    nextButton.innerHTML = "Next ";
  }
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
