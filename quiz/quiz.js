const questions = [
  {
    "question": "What is your favourite school subject?",
    "uxAnswer": "Art",
    "uxTotal": "1",
    "answer1Image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/EW7_Eunos_MRT_Station_exterior_202412.jpg/500px-EW7_Eunos_MRT_Station_exterior_202412.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "engineeringAnswer": "Computing",
    "engineeringTotal": "2",
    "answer2Image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Blueberry_frozen_yoghurt_%284937999312%29.jpg/330px-Blueberry_frozen_yoghurt_%284937999312%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "aiAnswer": "Science",
    "aiTotal": "3",
    "answer3Image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/An_artist%27s_impression_of_a_Pioneer_spacecraft_on_its_way_to_interstellar_space.jpg/330px-An_artist%27s_impression_of_a_Pioneer_spacecraft_on_its_way_to_interstellar_space.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "dataAnswer": "Mathematics",
    "dataTotal": "4",
    "answer4Image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/EW7_Eunos_MRT_Station_exterior_202412.jpg/500px-EW7_Eunos_MRT_Station_exterior_202412.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "managementAnswer": "Business",
    "managementTotal": "5",
    "answer5Image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Blueberry_frozen_yoghurt_%284937999312%29.jpg/330px-Blueberry_frozen_yoghurt_%284937999312%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "cyberAnswer": "Investigating cyber threats and protecting systems from hackers",
    "cyberTotal": "6",
    "answer6Image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/An_artist%27s_impression_of_a_Pioneer_spacecraft_on_its_way_to_interstellar_space.jpg/330px-An_artist%27s_impression_of_a_Pioneer_spacecraft_on_its_way_to_interstellar_space.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
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
    "managementTotal": "5",
    "cyberAnswer": "A high-tech security operations centre",
    "cyberTotal": "6"
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
    "managementTotal": "5",
    "cyberAnswer": "Solving mysteries and finding hidden clues",
    "cyberTotal": "6"
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
    "cyberAnswer": "Protecting people and stopping cyber attacks",
    "cyberTotal": "6"
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