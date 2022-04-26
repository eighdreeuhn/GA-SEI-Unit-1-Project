const openViewer = function() {
    console.log();
}


$(document).ready(() => {
    $("#box-1").on('click', function(event) {
        $("#box-6").toggleClass("box-1");
    })
    $("#box-2").on('click', function(event) {
        $("#box-6").toggleClass("box-2");
    })
    $("#box-3").on('click', function(event) {
        $("#box-6").toggleClass("box-3");
    })
    $("#box-4").on('click', function(event) {
        $("#box-6").toggleClass("box-4");
    })
    $("#box-5").on('click', function(event) {
        $("#box-6").toggleClass("box-5");
    })
});
