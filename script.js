 var startButton = document.getElementById("start-btn");
  startButton.addEventListener("click", startQuiz);
 var questionsContainerElement = document.getElementById("question-container");
 var questionElement = document.getElementById("question");
 var answerButtonsElement = document.getElementById("answer-buttons"); 
 var currentQuestionIndex = 0;

 var questions = [];
 q1 = {
 question: "What color is Grass?",
 wrong0: "Red",
 wrong1: "Yellow",
 wrong2: "Orange",
 correct: "Green"
 }
q2 = {
question: "What color is the ocean?",
wrong0: "Purple",
wrong1: "Pink",
wrong2: "Yellow",
correct: "Blue"
}
q3 = {
question: "What color are the pedals of a Sunflower?",
wrong0: "Blue",
wrong1: "Pink",
wrong2: "Green",
correct: "Yellow"
}
q4 = {
question: "What is the color of Amethyst",
wrong0: "Red",
wrong1: "Yellow",
wrong2: "Orange",
correct: "Purple"
}
q5 = {
question: "What color is the Lorax?",
wrong0: "Pink",
wrong1: "Blue",
wrong2: "Green",
correct: "Orange"
}

 questions.push(q1)

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







