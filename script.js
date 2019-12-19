 const startButton = document.getElementById("start-btn");
  startButton.addEventListener("click", startQuiz);
 const questionsContainerElement = document.getElementById("question-container");
 const questionElement = document.getElementById("question");
 const answerButtonsElement = document.getElementById("answer-buttons"); 
 let shuffledQuestion, currentQuestionIndex


 function startQuiz(){
     startButton.classList.add("hide");
     questionsContainerElement.classList.remove("hide");
     shuffledQuestions = questions.sort(() => Math.random() - .5);
     setNextQuestion();

 }
 function showQuestion(question){
    questionElement.innerText = question.question; 
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
 }
 
 function setNextQuestion(){
    showQuestion(shuffledQuestion[currentQuestionIndex]);
 }


 function selectAnswer(){

 }







const questions= [
    {
        question: "What is my name?",
        answers: [
            {text: "Mary", correct: false},
            {text: "Dyani", correct: true},
            {text: "Sarah", correct: false},
            {text: "Kate", correct: false}
        ]
    }
]
    
