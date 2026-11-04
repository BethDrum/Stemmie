const questions = [
  {
    "question": "What is your favourite school subject?",
    "uxAnswer": "Art",
    "uxTotal": "1",
    "engineeringAnswer": "Computing",
    "engineeringTotal": "2",
    "aiAnswer": "Science",
    "aiTotal": "3",
    "dataAnswer": "Mathematics",
    "dataTotal": "4",
    "managementAnswer": "Business",
    "managementTotal": "5"
  },
  {
    "question": "What is your ideal work environment?",
    "uxAnswer": "Open creative studio",
    "uxTotal": "1",
    "engineeringAnswer": "Home office",
    "engineeringTotal": "2",
    "aiAnswer": "State-of-the-art lab",
    "aiTotal": "3",
    "dataAnswer": "On my own",
    "dataTotal": "4",
    "managementAnswer": "On the move",
    "managementTotal": "5"
  },
  {
    "question": "What do you like to do in your spare time?",
    "uxAnswer": "Working on my style",
    "uxTotal": "1",
    "engineeringAnswer": "Gaming",
    "engineeringTotal": "2",
    "aiAnswer": "Solving puzzles",
    "aiTotal": "3",
    "dataAnswer": "Watching TV",
    "dataTotal": "4",
    "managementAnswer": "Reading",
    "managementTotal": "5"
  },
  {
    "question": "What describes you best?",
    "uxAnswer": "I see the world in a different way and love coming up with new ideas",
    "uxTotal": "1",
    "engineeringAnswer": "I like practical, hands on work",
    "engineeringTotal": "2",
    "aiAnswer": "I enjoy solving problems and working with numbers",
    "aiTotal": "3",
    "dataAnswer": "I like analyzing data and finding patterns",
    "dataTotal": "4",
    "managementAnswer": "I enjoy leading teams and making decisions",
    "managementTotal": "5"
  },
  {
    "question": "What do you find most satisfying?",
    "uxAnswer": "Visual results and creative expression",
    "uxTotal": "1",
    "engineeringAnswer": "Seeing something I built work successfully",
    "engineeringTotal": "2",
    "aiAnswer": "Finding solutions to complex problems",
    "aiTotal": "3",
    "dataAnswer": "Organising and interpreting data",
    "dataTotal": "4",
    "managementAnswer": "Turning small ideas into big results",
    "managementTotal": "5"
  },
  {
    "question": "How would your friends describe you?",
    "uxAnswer": "Creative and artistic",
    "uxTotal": "1",
    "engineeringAnswer": "Hard working and practical",
    "engineeringTotal": "2",
    "aiAnswer": "Forward thinking and analytical",
    "aiTotal": "3",
    "dataAnswer": "Detail-oriented and logical",
    "dataTotal": "4",
    "managementAnswer": "Confident and decisive",
    "managementTotal": "5"
  },
  {
    "question": "What is most important to you?",
    "uxAnswer": "Being able to express myself creatively",
    "uxTotal": "1",
    "engineeringAnswer": "Having freedom to work on practical projects",
    "engineeringTotal": "2",
    "aiAnswer": "Earning good money and having a stable career",
    "aiTotal": "3",
    "dataAnswer": "Always keep learning and improving my skills",
    "dataTotal": "4",
    "managementAnswer": "Interacting with people and leading ideas",
    "managementTotal": "5"
  }
]

const categories = ['ux', 'engineering', 'ai', 'data', 'management'];
const categoryNames = {
  ux: 'UX design',
  engineering: 'Engineering',
  ai: 'Artificial intelligence',
  data: 'Data science',
  management: 'Technology management'
};
const categoryDescriptions = {
  ux: 'You are best suited to UX.',
  engineering: 'You are best suited to Engineering.',
  ai: 'You are best suited to Artificial Intelligence.',
  data: 'You are best suited to Data Science.',
  management: 'You are best suited to Technology Management.'
};
const optionLabels = document.querySelectorAll('.option span');
const optionInputs = document.querySelectorAll('input[name="option"]');
const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const result = document.querySelector('.result');
const totalQuestions = questions.length;
let currentQuestion = 0;
let selectedAnswersData = [];

function generateQuestion(index) {
  const question = questions[index];
  questionEl.textContent = `${index + 1}. ${question.question}`;

  categories.forEach((category, optionIndex) => {
    optionLabels[optionIndex].textContent = question[`${category}Answer`];
    optionInputs[optionIndex].value = category;
    optionInputs[optionIndex].checked = selectedAnswersData[index] === category;
  });

  previousButton.disabled = index === 0;
  nextButton.textContent = index === totalQuestions - 1 ? 'See result' : 'Next';
}

function showResult() {
  const scores = Object.fromEntries(categories.map(category => [category, 0]));
  selectedAnswersData.forEach(category => scores[category]++);
  const highestScore = Math.max(...Object.values(scores));
  const bestMatches = categories.filter(category => scores[category] === highestScore);
  const matchNames = bestMatches.map(category => categoryNames[category]).join(' and ');
  const matchDescriptions = bestMatches
    .map(category => `<p>${categoryDescriptions[category]}</p>`)
    .join('');

  container.hidden = true;
  result.innerHTML = `
    <h1>Your best match: ${matchNames}</h1>
    ${matchDescriptions}
    <button class="restart" type="button">Restart quiz</button>
  `;
}

function loadNextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert('Please select an option.');
    return;
  }

  selectedAnswersData[currentQuestion] = selectedOption.value;

  if (currentQuestion === totalQuestions - 1) {
    showResult();
    return;
  }

  currentQuestion++;
  generateQuestion(currentQuestion);
}

function loadPreviousQuestion() {
  if (currentQuestion === 0) {
    return;
  }

  currentQuestion--;
  generateQuestion(currentQuestion);
}

function restartQuiz() {
  currentQuestion = 0;
  selectedAnswersData = [];
  result.replaceChildren();
  container.hidden = false;
  generateQuestion(currentQuestion);
}

generateQuestion(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', event => {
  if (event.target.matches('.restart')) {
    restartQuiz();
  }
});