//Removes all .pixel children from .snow-screen div and generates a grayscale pixelated screen
const snowScreen = function() {
    $(".snow-screen").children().remove();
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 24; j++) { 
             $(".snow-screen").append(generatePixel);
         }
        }
}

const generatePixel = function() {
    let pixel = $("<div class='pixel'>");
             let shade = Math.floor(Math.random() * 256);
             pixel.css(`background-color`, `rgb(${shade}, ${shade}, ${shade})`)
             return pixel;
}

const static = function() {
    setInterval(snowScreen, 150);
}

const about = function() {
    if (clicked === true) {
        $(".blinker").text("about/");
    } else {
        $(".blinker").text("loading/");
    }
    $("div #viewer-screen.about").append("<p>");
    $("div #viewer-screen.about p").css('grid-column-area')
    $("div #viewer-screen.about p").text("I wrote my first program on a TI-82 graphing calculator and have been fascinated by programming languages and design ever since. Collaborative, driven, and comitted to doing great work. I'm a life-long learner in search of a great organization. I'd love to talk to you!");
}

const languages = function() {
    if (clicked === true) {
        $(".blinker").text("languages/");
    } else {
        $(".blinker").text("loading/");
    }
    $("div #viewer-screen.languages").append("<div><h3>LANGUAGES</h3></div>");
    $("div #viewer-screen.languages").append("<div><h2>~TYPED~</h2></div>");
    $("div #viewer-screen.languages").append("<div><h2>HTML  CSS  JavaScript JQuery</h2></div>");
    $("div #viewer-screen.languages").append("<div><h2>~SPOKEN~</h2></div>");
    $("div #viewer-screen.languages").append("<div><h2>Espanol, Italiano, 日本語</h2></div>");
}

const portfolio = function() {
    if (clicked === true) {
        $(".blinker").text("portfolio/");
    } else {
        $(".blinker").text("loading/");
    }
    $("div #viewer-screen.portfolio").append("<div><h3>GA SEI Project-1</h3></div>");
    $("div #viewer-screen.portfolio").append("<div><h3>GA SEI Project-2</h3></div>");
    $("div #viewer-screen.portfolio").append("<div><h3>GA SEI Project-3</h3></div>");
    $("div #viewer-screen.portfolio").append("<div><h3>GA SEI Project-4</h3></div>");
}

const accolades = function() {
    if (clicked === true) {
        $(".blinker").text("skills/");
    } else {
        $(".blinker").text("loading/");
    }
    $("div #viewer-screen.accolades").append('<div><h4>Insightful problem-solving skills</h4></div>');
    $("div #viewer-screen.accolades").append('<div><h4>Years of experience working in and leading teams</h4></div>');
    $("div #viewer-screen.accolades").append('<div><h4>Gutenberg Coding Society Developer of the year - ca. 1673</h4></div>');
    $("div #viewer-screen.accolades").append(`<div><h4>"Adrian's code has never killed anyone... that I know of." - sastified customer</h4></div>`);
    $("div #viewer-screen.accolades").append("<div><h4>404</h4></div>");
}

const buildBoard = function() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

}


const forFun = function() {
    if (clicked === true) {
        $(".blinker").text("fun_time/");
    } else {
        $(".blinker").text("loading/");
    }
    $("div #viewer-screen.for_fun").append("<button id='reset-button'>");
    $("div #viewer-screen.for_fun").append("<div id='game-box'>");
    $("div #viewer-screen.for_fun button").css("grid-area", "1 / 3 / 1 / 5")
    $("div #viewer-screen.for_fun button").text("reset").css("margin", "10%");
    $("div #viewer-screen.for_fun #game-box").css("grid-area", "2 / 2 / 6 / 6");
    $("div #viewer-screen.for_fun #game-box").css("display", "grid")
    $("div #viewer-screen.for_fun #game-box").css("grid-template", "repeat(4, 1fr) / repeat(4, 1fr");
    $("div #viewer-screen.for_fun #game-box").css("background-color", "lightgray");
    buildBoard();
}

const clearScreen = function() {
    $("#viewer-screen").children().remove();
    $(".snow-screen").children().remove();
}

let clicked = false;

// Eventlisteners built here:
$(".box").on('click', function() {
    if (clicked === false) {
        clicked = true;
    } else {
        clicked = false;
    }
})


$('#box-1').on('click', function(event) {
    event.preventDefault();
    console.log($(event.target).hasClass("dimmed"));
    if (!$(event.target).parent().hasClass("dimmed")) {
        $("#box-2, #box-3, #box-4, #box-5").toggleClass("dimmed");
        console.log($("#box-2").hasClass("dimmed"))
        $("#viewer-screen").toggleClass("about snow-screen");
        clearScreen();
        about();
    }
})

$("#box-2").on('click', function(event) {
    event.preventDefault();
    if (!$(event.target).parent().hasClass("dimmed")) {
        $("#box-1, #box-3, #box-4, #box-5").toggleClass("dimmed");
        $("#viewer-screen").toggleClass("languages snow-screen");
        clearScreen();
        languages();
    }
})

$("#box-3").on('click', function(event) {
    event.preventDefault();
    if (!$(event.target).parent().hasClass("dimmed")) {
        $("#box-1, #box-2, #box-4, #box-5").toggleClass("dimmed");
        $("#viewer-screen").toggleClass("snow-screen portfolio");
        clearScreen();
        portfolio();
    }
})

$("#box-4").on('click', function(event) {
    event.preventDefault();
    if (!$(event.target).parent().hasClass("dimmed")) {
    $("#box-1, #box-2, #box-3, #box-5").toggleClass("dimmed");
    $("#viewer-screen").toggleClass("snow-screen accolades");
    clearScreen();
    accolades();
    }
})

$("#box-5").on('click', function(event) {
    event.preventDefault();
    if (!$(event.target).parent().hasClass("dimmed")) {
        $("#box-1, #box-2, #box-3, #box-4").toggleClass("dimmed");
        $("#viewer-screen").toggleClass("snow-screen for_fun");
        clearScreen();
        forFun();
    }
 })

 $("#message").on('click',  function(event) {
    (event).preventDefault();
    // $("#contact-sheet, #contact-sheet img").toggleClass(" hidden shown");
    $("#box-wrapper").toggleClass("dimmed");

 })

$('#box-1.box').on('hover', function(event) {
    event.preventDefault();
        $(event.target).text('About');
})

$(document).ready(function() {
    static();
})
