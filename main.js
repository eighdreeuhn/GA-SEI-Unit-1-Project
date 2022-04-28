//All functions declared here in the header
// const link = 'https://docs.google.com/spreadsheets/d/11RXPA6fh2GQCeni-7yy4OqrKXia3HE1ScoOFRFssPZk/edit#gid=0"'

// const key = 'AIzaSyD5gvCmsvh1nSoAND0u0MN5FO-e-gdrHtk'

// const id = "11RXPA6fh2GQCeni-7yy4OqrKXia3HE1ScoOFRFssPZk";

// let url = `https://sheets.googleapis.com/v4/spreadsheets/11RXPA6fh2GQCeni-7yy4OqrKXia3HE1ScoOFRFssPZk/values/A1:B1?key=${key}`

// const getContent = function() {
// $.ajax({
//     method: "get",
//     url: url
// })
// .then(function(data) {
//     return data.values[0];
// })
// .catch(function() {
//     console.log("nope");
// })
// }

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
    setInterval(snowScreen, 200);
}

const about = function() {
    // const aboutData = getContent();
    // const aboutText = aboutData[1];
    $("div #viewer-screen.about").append("<p>");
    $("div #viewer-screen.about p").css('grid-column-area')
    $("div #viewer-screen.about p").text("I wrote my first program on a TI-82 graphing calculator and have been fascinated by programming languages and design ever since. Collaborative, driven, and comitted to doing great work. I'm a life-long learner in search of a great organization. I'd love to talk to you!");
}

const languages = function() {
    $("div #viewer-screen.languages").append("<div><h3>LANGUAGES</h3></div>");
    $("div #viewer-screen.languages").append("<div><h2>:TYPED:</h2></div>");
    $("div #viewer-screen.languages").append("<div><h2>HTML  CSS  JavaScript/$JQuery</h2></div>");
    $("div #viewer-screen.languages").append("<div><h2>:SPOKEN:</h2></div>");
    $("div #viewer-screen.languages").append("<div><h2>Espanol, Italiano, 日本語</h2></div>");
}

const portfolio = function() {
    $("div #viewer-screen.portfolio").append("<div><h3>GA SEI Project-1</h3></div>");
    $("div #viewer-screen.portfolio").append("<div><h3>GA SEI Project-2</h3></div>");
    $("div #viewer-screen.portfolio").append("<div><h3>GA SEI Project-3</h3></div>");
    $("div #viewer-screen.portfolio").append("<div><h3>GA SEI Project-4</h3></div>");
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

const clearScreen = function() {
    $(".snow-screen, viewer-screen").children().remove();
}

// Eventlisteners built here:

$('#box-1').on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
        clearScreen();
        $("#box-2, #box-3, #box-4, #box-5").toggleClass("dimmed");
        $("#viewer-screen").toggleClass("snow-screen about");
    about();
    } else {
    }
})

$("#box-2").on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
        $("#box-1, #box-3, #box-4, #box-5").toggleClass("dimmed");
        clearScreen();
        $("#viewer-screen").toggleClass("snow-screen languages");
        languages();
    }
})

$("#box-3").on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
        $("#box-1, #box-2, #box-4, #box-5").toggleClass("dimmed");
        clearScreen();
        $("#viewer-screen").toggleClass("snow-screen portfolio");
        portfolio();
    }
})

$("#box-4").on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
    $("#box-1, #box-2, #box-3, #box-5").toggleClass("dimmed");
    clearScreen();
    $("#viewer-screen").toggleClass("snow-screen accolades");
    accolades();
    }
})

$("#box-5").on('click', function(event) {
    if (!$(event.target).hasClass("dimmed")) {
        $("#box-1, #box-2, #box-3, #box-4").toggleClass("dimmed");
        clearScreen();
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
