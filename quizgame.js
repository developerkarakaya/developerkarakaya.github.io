var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var successCount = document.getElementById("successCount");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var optionE = document.getElementById("choiceE");
var scoreBlock = document.getElementById("scoreBlock");
var successCountBlock = document.getElementById("successCountBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;


let questions = [{
    question: "Bu Hangi Kuş?",
    imgSrc: "bellbird.jpg",
    choiceA: "Baykuş",
    choiceB: "Leylek",
    choiceC: "Serçe",
    choiceD: "Kartal",
    choiceE: null,

    correctAnswer: "B"
}, {
    question: "Bu Hangi Kuş?",

    imgSrc: "kakapo.jpg",
    choiceA: "Baykuş",
    choiceB: "Leylek",
    choiceC: "Serçe",
    choiceD: "Kartal",
    choiceE: "Şahin",

    correctAnswer: "C"
}, {
    question: "Bu Hangi Kuş?",
    imgSrc: "kotuku.jpg",
    choiceA: "Baykuş",
    choiceB: "Leylek",
    choiceC: "Serçe",
    choiceD: "Kartal",
    choiceE: null,

    correctAnswer: "B"
}, {
    question: "Bu Hangi Kuş?",

    imgSrc: "kea.jpg",
    choiceA: "Baykuş",
    choiceB: "Leylek",
    choiceC: "Serçe",
    choiceD: "Kartal",
    choiceE: null,

    correctAnswer: "D"
}, {
    question: "Bu Hangi Kuş?",

    imgSrc: "kaka.jpg",
    choiceA: "Baykuş",
    choiceB: "Leylek",
    choiceC: "Serçe",
    choiceD: "Kartal",
    choiceE: null,
    correctAnswer: "A"
}];


var questionIndex = 0;

function getQuestion() {

    showScore();
    document.getElementById("choiceA").style.backgroundColor = "white";
    document.getElementById("choiceB").style.backgroundColor = "white";
    document.getElementById("choiceC").style.backgroundColor = "white";
    document.getElementById("choiceD").style.backgroundColor = "white";
    document.getElementById("choiceE").style.backgroundColor = "white";

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Soru  " + (questionIndex + 1) + ": " + q.question + "</p>";
    if (questionIndex == 3) {
        quizImg.innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/2INon7kzezg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";


    }
    else {
        quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    }
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    if (q.choiceE != null) {
        optionE.style.display = "block";
        optionE.innerHTML = q.choiceE;
    }
    else {
        optionE.style.display = "none";
        optionE.innerHTML = "";

    }
    choices.style.display = "block";


}


function beginQuiz() {
    start.style.display = "none";
    getQuestion();
    quiz.style.display = "block";
    successCount.style.display = "block";
}

function showScore() {
    scoreBlock.innerHTML = "<p> Skor :" + score + " / 5</p>";
    successCountBlock.innerHTML = "<p> Doğru Sayısı :" + score + " / 5</p>";
}


function check(answer) {

    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choiceResponse.innerHTML = "<p>Doğru!</p>"
            document.getElementById("choice" + answer + "").style.backgroundColor = "green";

            choiceResponse.style.display = "block";
            setTimeout(getQuestion, 3000);
        }
        else {
            questionIndex++;
            choiceResponse.innerHTML = "<p>Yanlış!</p>";
            document.getElementById("choice" + answer + "").style.backgroundColor = "red";
            document.getElementById("choice" + questions[questionIndex - 1].correctAnswer + "").style.backgroundColor = "green";

            choiceResponse.style.display = "block";
            setTimeout(getQuestion, 3000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML = "<p>Doğru!</p>"
            document.getElementById("choice" + answer + "").style.backgroundColor = "green";
            choiceResponse.style.display = "block";
            setTimeout(showScore, 3000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML = "<p>Yanlış!</p>";
            document.getElementById("choice" + answer + "").style.backgroundColor = "red";
            document.getElementById("choice" + questions[questionIndex].correctAnswer + "").style.backgroundColor = "green";
            choiceResponse.style.display = "block";
            setTimeout(showScore, 3000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    quiz.style.display = "none";
    successCount.style.display = "none";

    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
    window.location.reload();
}
showScore();





