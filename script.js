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
    
