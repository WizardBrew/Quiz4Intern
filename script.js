const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");
const timerEl = document.getElementById("timer");

const userInfo = JSON.parse(localStorage.getItem("userData")) || {};
document.getElementById("user-name").textContent = userInfo.name || '';
document.getElementById("user-email").textContent = userInfo.email || '';
document.getElementById("user-stream").textContent = userInfo.stream || '';
document.getElementById("user-level").textContent = userInfo.level || '';

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let wrongAnswers = [];
let startTime;
let timerInterval;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuestions() {
  const filtered = questionBank.filter(q => q.category === userInfo.stream);
  selectedQuestions = shuffle(filtered).slice(0, 10);
}

function renderQuestion() {
  const q = selectedQuestions[currentQuestion];
  questionNumber.textContent = `Question ${currentQuestion + 1} of 10`;
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  const shuffledOptions = shuffle([...q.options]);
  shuffledOptions.forEach(option => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  const options = document.querySelectorAll(".option");
  options.forEach(opt => {
    opt.classList.add("disabled");
    if (opt.textContent === correct) {
      opt.classList.add("correct");
    } else if (opt === selected) {
      opt.classList.add("wrong");
    }
  });

  if (selected.textContent === correct) {
    score++;
  } else {
    wrongAnswers.push(selectedQuestions[currentQuestion]);
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < 10) {
    renderQuestion();
    nextBtn.classList.add("hidden");
  } else {
    showResult();
  }
};

function showResult() {
  clearInterval(timerInterval);
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  document.getElementById("user-score").textContent = score;

  const wrongList = document.getElementById("wrong-list");
  wrongAnswers.forEach(wq => {
    const opt = document.createElement("option");
    opt.textContent = `${wq.question} (Ans: ${wq.answer})`;
    wrongList.appendChild(opt);
  });

  const projectList = document.getElementById("project-list");
  let level = score <= 4 ? "beginner" : score <= 7 ? "intermediate" : "expert";

  const recommendations = shuffle(projectBank.filter(
    p => p.category === userInfo.stream && p.level === level
  )).slice(0, 3);

  recommendations.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${p.url}" target="_blank">${p.title}</a> - ${p.description}`;
    projectList.appendChild(li);
  });
}

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestions();
  renderQuestion();
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    timerEl.textContent = `Time: ${min}:${sec}`;
  }, 1000);
};
