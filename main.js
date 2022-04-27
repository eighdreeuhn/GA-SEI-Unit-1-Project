//Removes the .pixel children from the .snow-screen div and generates a grayscale pixelated screen
const snowScreen = function() {
    $(".snow-screen").children(".pixel").remove();
    $(".snow-screen").children("p").remove();
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 24; j++) { 
             $("#box-6.box.snow-screen").append(generatePixel);
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
    setInterval(snowScreen, 10);
}

$('#box-1').on('click', function() {
    $(".viewer-screen > p").text('');
    $(".snow-screen").children(".pixel").remove();
    $("#box-6").toggleClass("viewer-screen snow-screen");
    $(".viewer-screen").append("<p>Here is where I'm going to talk an incredible bunch of nonsense about how accomplished a developer I am.</p>");
})
$("#box-2").on('click', function() {
    $(".viewer-screen > p").text('');
    $(".snow-screen").children(".pixel").remove();
    $("#box-6").toggleClass("viewer-screen snow-screen");
    $(".viewer-screen").append("<p>All code and no play makes Homer something something...</p>");

})
$("#box-3").on('click', function() {
    $(".viewer-screen > p").text('');
    $(".snow-screen").children(".pixel").remove();
    $("#box-6").toggleClass("viewer-screen snow-screen");
    $(".viewer-screen").append("<p>My stars! The awards I've received... Don't get me started.</p>");
})
$("#box-4").on('click', function() {
    $(".viewer-screen > p").text('');
    $(".snow-screen").children(".pixel").remove();
    $("#box-6").toggleClass("viewer-screen snow-screen");
    $(".viewer-screen").append("<p>My stars! The awards I've received... Don't get me started.</p>");
})
$("#box-5").on('click', function() {
    $(".viewer-screen > p").text('');
    $(".snow-screen").children(".pixel").remove();
    $("#box-6").toggleClass("viewer-screen snow-screen");
    $(".viewer-screen").append("<p>JavaScript, Jquery, HTML, CSS, some Python, Espanol, Un po' d'Italiano,　ちょっと日本語</p>");
 })

$('#box-1').on('hover', function(event) {
        (event.target).text('About');
})

$("header").on('hover', (event) => {
    event.target.css("background-color", "red")
})
// snowScreen();
static();
