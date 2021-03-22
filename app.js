var questionsArray = [
    {
        question : "Q1: What is capital of Pakistan ? ",
        answer : "Karachi",
        options : [
        "1: Islamabad",
        "2: Karachi",
        "3: Lahore", 
        ]
    },

    {
        question : "Q2: Who is pm of Pakistan ? ",
        answer : "Imran Khan",
        options : [
        "1: Imran Khan",
        "2: Nawaz Sharif",
        "3: Bilawal Khusro",
        ]
    },

    {
        question : "Q3: Where is tomb of Quaid-e-Azam ? ",
        answer : "Karachi",
        options : [
        "1: Peshawar",
        "2: Quetta",
        "3: Karachi",
        ]
    },

    {
        question : "Q4: Where is Pakistan situated in ? ",
        answer : "Asia",
        options : [
        "1: Europe",
        "2: Asia",
        "3: Middle East",
        ]
    },

    {
        question : "Q5: What is full form of UAE ? ",
        answer : "United Arab Emirates",
        options : [
        "1:United Arab Emirates",
        "2: Universal Arab Emirates",
        "3: Union Arabian Eagle",
        ]
    },
];



function validate(){
    sessionStorage.clear();
    var username = document.getElementById("username");
    if(username.value == ""){
        alert("Username is required to start quiz");
    }

    else{
        sessionStorage.setItem("name", username.value);
        startQuiz();
    }
}

function startQuiz(){
    window.location.href = "quiz.html";
}


function showQuestion(e){
    // SHOW QUESTION
    var questions = document.getElementById("divQuestion");
    questions.innerHTML = questionsArray[e].question;
    // SHOW OPTIONS
    var options = document.getElementsByClassName("divOption");
    for(var i = 0; i < options.length; i++){
        options[i].innerHTML = questionsArray[e].options[i];
    }
}

var questionCount = 0;
var score = 0;
checkAns = 0;

function nextQuestion(e){
    var next = document.getElementById("next");
    questionCount++;
    checkAnswer();
    removeActive();
    showQuestion(questionCount);
}

function activeOption(e){
    removeActive();
    e.classList.add("active");
}

function removeActive(){
    var active = document.getElementsByClassName("active");
    for(var i=0; i<active.length; i++){
        active[i].classList.remove("active");
    }
}

function checkAnswer(){
    var active = document.getElementsByClassName("active");
    for(var i=0; i<active.length; i++){
        if(active[i].innerHTML == questionsArray[i].answer){
            score = 10;
            console.log(score);
        }
    }
}

function startTime(){
    var startingMin = 2;
    var time = startingMin * 60;
    var timerPara = document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timerPara.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "index.html";
        }
    }
    setInterval(updateCountDown, 1000);
}