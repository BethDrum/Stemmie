const questions = [
  {
    "question": "What is your favourite school subject?",
    "uxAnswer": "Art",
    "uxTotal": "1",
    "answer1Image": "https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "engineeringAnswer": "Computing",
    "engineeringTotal": "2",
    "answer2Image": "https://images.unsplash.com/photo-1759662011366-8a743eae9649?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "aiAnswer": "Science",
    "aiTotal": "3",
    "answer3Image": "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "dataAnswer": "Mathematics",
    "dataTotal": "4",
    "answer4Image": "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "managementAnswer": "Business",
    "managementTotal": "5",
    "answer5Image": "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "cyberAnswer": "English",
    "cyberTotal": "6",
    "answer6Image":"https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
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
    "managementTotal": "5",
    "cyberAnswer": "I'm curious, observant and love figuring out how things work",
    "cyberTotal": "6"
  },
  {
    "question": "What do you like to do in your spare time?",
    "uxAnswer": "Working on my style",
    "uxTotal": "1",
    "answer1Image":"https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "engineeringAnswer": "Gaming",
    "engineeringTotal": "2",
    "answer2Image": "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "aiAnswer": "Solving puzzles",
    "aiTotal": "3",
    "answer3Image": "https://images.unsplash.com/photo-1637094408647-0d81d08f81b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "dataAnswer": "Watching TV",
    "dataTotal": "4",
    "answer4Image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "managementAnswer": "Reading",
    "managementTotal": "5",
    "answer5Image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "cyberAnswer": "Solving mysteries and finding hidden clues",
    "cyberTotal": "6",
    "answer6Image": "https://images.unsplash.com/photo-1577401159468-3bbc7ee440b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
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
    "managementTotal": "5",
    "cyberAnswer": "Resourceful, curious and alert",
    "cyberTotal": "6"
  },  
  {
    "question": "What is your ideal work environment?",
    "uxAnswer": "Open creative studio",
    "uxTotal": "1",
    "answer1Image": "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "engineeringAnswer": "Home office",
    "engineeringTotal": "2",
    "answer2Image": "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "aiAnswer": "State-of-the-art lab",
    "aiTotal": "3",
    "answer3Image": "https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "dataAnswer": "On my own",
    "dataTotal": "4",
    "answer4Image": "https://images.unsplash.com/photo-1776811798099-ff6d61bd6c7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "managementAnswer": "On the move",
    "managementTotal": "5",
    "answer5Image": "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "cyberAnswer": "Modern office",
    "cyberTotal": "6"
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
    "managementTotal": "5",
    "cyberAnswer": "Helping people and solving problems",
    "cyberTotal": "6"
  },
  {
    "question": "What is most important to you?",
    "uxAnswer": "Being able to express myself creatively",
    "uxTotal": "1",
    "engineeringAnswer": "Having freedom to work on practical projects",
    "engineeringTotal": "2",
    "aiAnswer": "Earning good money and having a stable career",
    "aiTotal": "3",
    "dataAnswer": "Always learning and improving my skills",
    "dataTotal": "4",
    "managementAnswer": "Interacting with people and leading ideas",
    "managementTotal": "5",
    "cyberAnswer": "Making the digital world a safer place",
    "cyberTotal": "6"
  }
];

const categories = ['ux', 'engineering', 'ai', 'data', 'management', 'cyber'];
const categoryNames = {
  ux: 'UX design',
  engineering: 'Engineering',
  ai: 'Artificial intelligence',
  data: 'Data science',
  management: 'Technology management',
  cyber: 'Cybersecurity'
};
const categoryDescriptions = {
  ux: 'You are best suited to UX.',
  engineering: 'You are best suited to Engineering.',
  ai: 'You are best suited to Artificial Intelligence.',
  data: 'You are best suited to Data Science.',
  management: 'You are best suited to Technology Management.',
  cyber: 'You are best suited to Cybersecurity.'
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
result.hidden = true;

function generateQuestion(index) {
  const question = questions[index];
  questionEl.textContent = `${index + 1}. ${question.question}`;

  categories.forEach((category, optionIndex) => {
    optionLabels[optionIndex].textContent = question[`${category}Answer`];
    optionInputs[optionIndex].value = category;
    optionInputs[optionIndex].checked = selectedAnswersData[index] === category;

    const image = document.querySelector(`#option${optionIndex + 1}Image`);
    const imageSource = question[`answer${optionIndex + 1}Image`];
    image.hidden = false;
    image.style.visibility = imageSource ? 'visible' : 'hidden';
    if (imageSource) {
      image.src = imageSource;
    }
    image.alt = question[`${category}Answer`];
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
  const resultSentence = bestMatches.length > 1
    ? `You are equally suited to ${matchNames}.`
    : categoryDescriptions[bestMatches[0]];

  container.hidden = true;
  result.hidden = false;
  result.innerHTML = `
    <h1>${resultSentence}</h1>
    <button class="restart" type="button">Restart quiz</button>
  `;
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  result.hidden = true;
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