 var startButton = document.getElementById("start-btn");
  startButton.addEventListener("click", startQuiz);
 var questionsContainerElement = document.getElementById("question-container");
 var questionElement = document.getElementById("question");
 var answerButtonsElement = document.getElementById("answer-buttons"); 
 var currentQuestionIndex = 0;



 
 
 
 
 function startQuiz(){
     startButton.classList.add("hide");
     questionsContainerElement.classList.remove("hide");
     setNextQuestion();
     var count = 15;
     var interval = setInterval(function(){
       document.getElementById('count').innerHTML=count;
       count--;
       if (count === 0){
         clearInterval(interval);
         document.getElementById('count').innerHTML='Done';
         // or...
         alert("You're out of time!");
       }
     }, 1000);
     
 }
 function showQuestion(question){
    questionElement.innerText = question.question; 
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText(answer.text) 
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
 }
 

 function setNextQuestion(){
    
 }


 function selectAnswer(){

 }







 var questions = [];
 q1 = {
 question: "What is my name?",
 wrong0: "mary",
 wrong1: "sarah",
 wrong2: "kate",
 correct: "dyani"
 }
 questions.push(q1)
