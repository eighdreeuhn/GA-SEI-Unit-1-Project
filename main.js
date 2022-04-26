const openViewer = function() {
    console.log();
}

    $('#box-1').on('click', function() {
        $('.box').toggleClass('.dimmed');
        $(".viewer-screen > p").text('');
        $("#box-6").toggleClass("viewer-screen");
        $(".viewer-screen > p").text("Awesomely sweet button# 1 content activated!");
    })
    $("#box-2").on('click', function() {
        $('.box').toggleClass('.dimmed');
        $(".viewer-screen > p").text('');
        $("#box-6").toggleClass("viewer-screen");
        $(".viewer-screen > p").text("Awesomely sweet button# 2 content activated!");

    })
    $("#box-3").on('click', function() {
        $('.box').toggleClass('.dimmed');
        $(".viewer-screen > p").text('');
        $("#box-6").toggleClass("viewer-screen");
        $(".viewer-screen > p").text("Awesomely sweet button# 3 content activated!");
    })
    $("#box-4").on('click', function() {
        $('.box').toggleClass('.dimmed');
        $(".viewer-screen > p").text('');
        $("#box-6").toggleClass("viewer-screen");
        $(".viewer-screen > p").text("Awesomely sweet button# 4 content activated!");
    })
    $("#box-5").on('click', function() {
        $('.box').toggleClass('.dimmed');
        $(".viewer-screen > p").text('');
        $("#box-6").toggleClass("viewer-screen");
        $(".viewer-screen > p").text("Awesomely sweet button# 5 content activated!");
    })

    $('#box-1').on('hover', function(event) {
        (event.target).text('About');
    })

