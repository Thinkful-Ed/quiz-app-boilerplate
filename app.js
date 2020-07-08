'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is an example of semantic HTML',
      answers: [
        '<div>',
        '<img>',
        '<span>',
        '<footer>'
      ],
      correctAnswer: '<footer>'
    },
    {
      question: 'Which flexbox property spaces elements to opposite sides of the page?',
      answers: [
        'justify-content: space-evenly',
        'justify-content: space-between',
        'justify-content: center',
        'justify-content: flex-start'
      ],
      correctAnswer: 'justify-content: space-between'
    },
    {
      question: 'What is the correct for loop structure to loop through all elements of an array?',
      answers: [
        'for(let i = 0; i <= array.length; i++)',
        'for(let i = 1; i < array.length; i++)',
        'for(let i = 0; i < array.length; i++)',
        'for(let i; i <= array.length; i++)'
      ],
      correctAnswer: 'for(let i = 0; i < array.length; i++)'
    },
    {
      question: 'What is a high order function?',
      answers: [
        'A function that returns a variable',
        'A function that takes in a callback as an argument',
        'An anonymous function',
        'A function that returns an object'
      ],
      correctAnswer: 'A function that takes in a callback as an argument'
    },
    {
      question: 'What is the correct jQuery selector to retrieve a main HTML tag',
      answers: [
        '$(\'main\')',
        '$(main)',
        '${\'main\'}',
        '($\'main\')'
      ],
      correctAnswer: '$(\'main\')'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function main() {
  generateView("start");
}

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateStartView() {
  //return start view html
}
function generateQuestionView() {
  //generate question html
  //inject store data into question
}
function generateEndView() {
  //return end view html
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  //Based on id call view functions below
  //Render html
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function updateQuestionView() {}

function startQuiz() {}

function toggleAnswer() {}

function submitAnswer() {}

function nextQuestion() {}