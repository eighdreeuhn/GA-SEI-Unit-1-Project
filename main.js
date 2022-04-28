//All functions declared here in the header

//Removes the .pixel children from the .snow-screen div and generates a grayscale pixelated screen
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
    setInterval(snowScreen, 50);
}

const about = function() {
    $("div #viewer-screen.about").append("<p>");
    $("div #viewer-screen.about p").css('grid-column-area')
    $("div #viewer-screen.about p").text("I wrote my first program on a TI-82 graphing calculator and have been fascinated by programming languages and design ever since. A lifelong learner in search of a great organization. I'd love to talk to you!");
}

const languages = function() {
    $("div #viewer-screen.languages").append("<p><h3></h3></p>");
    $("div #viewer-screen.languages p").text(`"Typed:"<br>"HTML"<br>"CSS"<br>"JavaScript/$JQuery"<br>"`);
}

const portfolio = function() {

}

const accolades = function() {

}

const buildBoard = function() {
    let numbers = [];
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            numbers.push([i,j]);
        }
    }
    // while (numbers.length !== 0)
}


const forFun = function() {
    $("div #viewer-screen.for_fun").append("<button id='reset-button'>");
    $("div #viewer-screen.for_fun").append("<div id='game-box'>");
    $("div #viewer-screen.for_fun button").css("grid-area", "1 / 3 / 1 / 5")
    $("div #viewer-screen.for_fun button").text("reset").css("margin", "10%");
    $("div #viewer-screen.for_fun #game-box").css("grid-area", "2 / 2 / 6 / 6");
    $("div #viewer-screen.for_fun #game-box").css("display", "grid")
    $("div #viewer-screen.for_fun #game-box").css("grid-template", "repeat(4, 1fr) / repeat(4, 1fr");
    buildBoard();
}

// const link = 'https://docs.google.com/spreadsheets/d/11RXPA6fh2GQCeni-7yy4OqrKXia3HE1ScoOFRFssPZk/edit#gid=0"'

// const key = 'AIzaSyD5gvCmsvh1nSoAND0u0MN5FO-e-gdrHtk'

// const id = "11RXPA6fh2GQCeni-7yy4OqrKXia3HE1ScoOFRFssPZk";

// let url = `https://sheets.googleapis.com/v4/spreadsheets/11RXPA6fh2GQCeni-7yy4OqrKXia3HE1ScoOFRFssPZk/values/A1:B1?key=${key}`

// $.ajax({url: url}).then(data => {
//     console.log(data);
// })

// Eventlisteners built here:

$('#box-1.box').on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
        $("#box-2, #box-3, #box-4, #box-5").toggleClass("dimmed");
        $(".snow-screen").children().remove();
        $("#viewer-screen").toggleClass("snow-screen about");
    about();
    }
})

$("#box-2").on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
        $("#box-1, #box-3, #box-4, #box-5").toggleClass("dimmed");
        $(".snow-screen").children().remove();
        $("#viewer-screen").toggleClass("snow-screen languages");
        languages();
    }
})

$("#box-3").on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
        $("#box-1, #box-2, #box-4, #box-5").toggleClass("dimmed");
        $(".snow-screen").children().remove();
        $("#viewer-screen").toggleClass("snow-screen portfolio");
        portfolio();
    }
})

$("#box-4").on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
    $("#box-1, #box-2, #box-3, #box-5").toggleClass("dimmed");
    $(".snow-screen").children().remove();
    $("#viewer-screen").toggleClass("snow-screen accolades");
    accolades();
    }
})

$("#box-5").on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
        $("#box-1, #box-2, #box-3, #box-4").toggleClass("dimmed");
        $(".snow-screen").children().remove();
        $("#viewer-screen").toggleClass("snow-screen for_fun");
        forFun();
    }
 })

 $("#message").on('click',  function() {
    // $("#contact-sheet, #contact-sheet img").toggleClass(" hidden shown");
    $("#box-wrapper").toggleClass("dimmed");
 })

$('#box-1.box').on('hover', function(event) {
        $(event.target).text('About');
})

$(document).ready(function() {
    static();
})
