const questions = [
  {
    question: "Qual é a capital do Brasil?",
    answers: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correctAnswer: 0,
  },
  {
    question: "Qual é a maior cidade do Brasil?",
    answers: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
    correctAnswer: 2,
  },
  {
    question: "Qual é a maior montanha do mundo?",
    answers: ["Monte Fuji", "Monte Everest", "Monte Branco", "Monte Carlo"],
    correctAnswer: 1,
  },
  {
    question: "Qual é o melhor time do mundo?",
    answers: ["Flamengo", "Corinthians", "Palmeiras", "Fluminense"],
    correctAnswer: 0,
  },
  {
    question: "Quantos mundiais tem a Italia?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 3,
  },
  {
    question: "Quantos titulos tem Ayrton Senna?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 2,
  },
  {
    question: "Qual é a capital do Uruguai?",
    answers: ["Punta del Este", "Montevideo", "Asunción", "Caracas"],
    correctAnswer: 1,
  },
  {
    question: "Qual é o nome do rio mais longo do mundo?",
    answers: ["Amazonas", "Mackenzie", "Nilo", "Ganges"],
    correctAnswer: 0,
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    answers: ["Marte", "Jupiter", "Saturno", "Netuno"],
    correctAnswer: 1,
  },
  {
    question: "Qual é o planeta mais próximo do Sol?",
    answers: ["Mercúrio", "Vênus", "Terra", "Marte"],
    correctAnswer: 0,
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("questionContainer");
  questionContainer.innerHTML = "";

  const question = document.createElement("p");
  question.textContent = questions[currentQuestion].question;
  questionContainer.appendChild(question);

  const answers = questions[currentQuestion].answers;
  for (let i = 0; i < answers.length; i++) {
    const answer = document.createElement("input");
    answer.type = "radio";
    answer.name = "answer";
    answer.value = i;
    answer.id = `answer${i}`;
    questionContainer.appendChild(answer);

    const label = document.createElement("label");
    label.htmlFor = `answer${i}`;
    label.textContent = answers[i];
    questionContainer.appendChild(label);
    questionContainer.appendChild(document.createElement("br"));
  }
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    const selectedIndex = parseInt(selectedAnswer.value);
    const correctIndex = questions[currentQuestion].correctAnswer;
    if (selectedIndex === correctIndex) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
}

function showResult() {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  const result = document.createElement("p");
  result.textContent = `Você acertou ${score} de ${questions.length} questões.`;
  resultContainer.appendChild(result);
}

document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    checkAnswer();
  });

displayQuestion();
