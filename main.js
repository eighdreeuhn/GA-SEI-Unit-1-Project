const openViewer = function() {
    console.log();
}


$(document).ready(() => {
    $("#box-1").on('click', function(event) {
        $("#box-6").toggleClass("box-1");
    })
    $("#box-2").on('click', function() {
        
    })

    $(".menu-box, .box").on('click', (event) =>{ 
        console.log('working')
    })
});
