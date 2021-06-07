

const nowLoadingElem = document.getElementById("now-loading");
const questionElem = document.getElementById("question-container");
const quizElem = document.getElementById("quizzes");


const gameState={
    quizzes : [],
    currentIndex : 0,
    correctNumber : 0
}

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';



window.addEventListener("load",()=>{
    fetchQuizData();
})


const fetchQuizData = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        gameState.quizzes = data.results;
        nowLoadingElem.hidden = true;
        setQuiz();
    })
}


const setQuiz=() => {
    if(gameState.quizzes.length === gameState.currentIndex){
        window.alert("finish");
    }else{
        makeQuiz();
    }

    
}
const makeQuiz=() => {
    questionElem.textContent = gameState.quizzes[gameState.currentIndex].question;
    
    const liElem = document.createElement("li");
    liElem.textContent = gameState.quizzes[gameState.currentIndex].correct_answer;
    quizElem.appendChild(liElem);

    liElem.addEventListener("click",()=>{
        gameState.currentIndex++;
        gameState.correctNumber++;
        setQuiz();
    })


    
}