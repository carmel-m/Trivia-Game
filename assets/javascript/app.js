// on page load, 'Trivia' heading and a 'Start' button will load
// click start button to open trivia question list and start countdown timer
// use radio buttons 
// store questions and answers in arrays
// need a countdown timer
// use .hide() and .show() methods (eg. when you click 'start game' the button will hide and qs show
// get value from radio button

// counter to keep track of score
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// for tracking which question we're up to
var counter = 0;

// when it reaches questions.length, end game and show results/gif

// questions array - use this or just put them in the html?
var questions = [
    {
        q: "In what year did Buffy first air?",
        a: "2008",
        b: "1997",
        c: "2001",
        d: "1999",
        e: "b"
    },
    {
        q: "Which of the following characters never died?",
        a: "Angel",
        b: "Tara",
        c: "Xander",
        d: "Buffy",
        e: "c"
    },
    {
        q: "What was Anya before she became human?",
        a: "Assassin Demon",
        b: "Vengeance Demon",
        c: "Chaos Demon",
        d: "Mucus Demon",
        e: "b"
    },
];




var nextQ = function () {

    $("#question").html(questions[counter].q);
    $("#answer-a").html(questions[counter].a);
    $("#answer-b").html(questions[counter].b);
    $("#answer-c").html(questions[counter].c);
    $("#answer-d").html(questions[counter].d);

}

//when timer = 0, do .endGame()



// function will run when answer a is clicked on
$("#answer-a").on("click", function () {
    if (questions[counter].e === "a") {
        correct++;
        counter++;
        nextQ();
    } else {
        incorrect++;
        counter++;
        nextQ();
    }
 console.log(correct);
 console.log(incorrect);

})

nextQ();



