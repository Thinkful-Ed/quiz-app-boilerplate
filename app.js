const STORE = {
  questions: [//1
    {
      question: 'Many businesses use which of the following to limit employees’ web access',
      answers: [
        'Content filtering',
        'Web bugs',
        'Honeypots',
        'Spyware'
      ],
      correctAnswer: 'Content filtering'
    },
    //2
    {
      question: 'Which of the following allows access to high-speed Internet services through the cable television network?',
      answers: [
        'Cable transceiver ',
        'Cable modem ',
        'Cable receiver ',
        'Cable dialer'
      ],
      correctAnswer: 'Cable modem '
    },
    //3
    {
      question: 'Which of the following terms is used to describe a program that hides in a computer and allows someone from a remote location to take full control of the computer? ',
      answers: [
        'A virus ',
        'A worm ',
        'A Trojan horse',
        'A rootkit'
      ],
      correctAnswer: 'A rootkit'
    },
    //4
    {
      question: 'Which of the following kinds of programs displays an online advertisement in a banner or pop-up window on webpages, email, or other Internet service?',
      answers: [
        'Spyware', 
        'Phishing', 
        'Adware', 
         'Trojan horse'
         ],
      correctAnswer: 'Adware'
    },
    //5
    {
      question: 'What is another term for data dictionary? ',
      answers: [
        'Index ',
        'Repository ',
        'Table',
        'File'
      ],
      correctAnswer: 'Repository '
    }
  ],
  questionNumber: 0,
  score: 0
};

/*** Start Screen */
function startScreenHtml(){
  return `
    <header>
      <h1>Computer Science Quiz</h1>
    </header>
    <div class="startScreen">
        <p>This quiz will assess your basic knowledge of Computer Science.</p>
        <button type="button" id="start">Start Quiz</button>
    </div>
  `;
}

function renderQuestion() {
  let question = STORE.questions[STORE.questionNumber]
  let questionHtml = currentQuestionHtml(question)
  $('main').html(questionHtml)
  $('form').submit(function(e) {
    e.preventDefault()

    let answer = $('input:radio[name=answer]:checked').val();

    // See if they actually picked one
    if (answer === undefined) {
      return; //If they didn't give an answer, dip out
    }

    if (answer === question.correctAnswer) {
      // Add +1 to the number correct
      STORE.score++
      
      // Show the correct answer text
      $('main').html(`
        <h1>Correct</h1>
        <p>Correct </p>
        <button class="next">Next</button>
      `)
    } else {
      // Show the incorrect answer text
      $('main').html(`
        <h1>Wrong</h1>
        <p>The correct answer was ${question.correctAnswer} </p>
        <button class="next">Next</button>
      `)
    }
    STORE.questionNumber++
  })
}

function currentQuestionHtml(question){
  let answer = question.answers
  return `
    <header>
        <h1>Computer Science Quiz</h1>
        <p>Current Question: ${STORE.questionNumber+1}</p>
        <p>Score: ${STORE.score}</p>
    </header>
    <form>
        <h3 class="Question"> ${question.question} </h3>
        <label for="answer-0">
            <input type="radio" id="answer-0" name="answer" value="${answer[0]}"required>${answer[0]}
          </label>
        <label for="answer-1">
            <input type="radio" id="answer-1" name="answer" value="${answer[1]}">${answer[1]}
          </label>
        <label for="answer-2">
            <input type="radio" id="answer-2" name="answer" value="${answer[2]}">${answer[2]}
          </label>
        <label for="answer-3">
            <input type="radio" id="answer-3" name="answer" value="${answer[3]}">${answer[3]}
          </label>
        <button class="submitButton" type="submit">
            Submit Question
          </button>
    </form>  
  `
}

function next() {
  $('main').on('click', '.next', function() {
    let totalNumberOfQuestions = STORE.questions.length
    let currentQuestion = STORE.questionNumber
    if (currentQuestion >= totalNumberOfQuestions) {
      $('main').html(restartScreenHtml())
      $('#restart').click(function(e) {
        resetScore();
        renderStartScreen();
      })
    } else {
      renderQuestion()
    }
  })
}

function renderStartScreen(){
  $('main').html(startScreenHtml())
  $('#start').click(function() {
   renderQuestion()
   next()
  })
}

// HTML for results screen
function restartScreenHtml(){
  return`
    <div class='quiz-result'>
        <p>The Quiz is over.</p>
        <p> You scored ${STORE.score}/${STORE.questions.length}</p>

        <button type="button" id="restart"> Restart Quiz</button>
    </div>
  `;
}

function resetScore() {
  STORE.score = 0;
  STORE.questionNumber = 0;
}

$(renderStartScreen)
  