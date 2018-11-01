function playAudio() {
    console.log("dabn");
    audio.play();

}


function log() {
    var x = document.getElementById("1").value;
    var y = document.getElementById("2").value;
    var z = y;
    var k = x;
    if ((z == '77777' && k == 'javi77777') || (z == '2' && k == 'tobiasid')) {
        window.location.replace("accesed.html");
    } else {

        $('#panel').addClass('shaky');
    }
}


$(document).ready(function () {
    
        $("#dank").click(function () {
            $("#panel").slideDown("slow");
            $("#dank").fadeOut("slow");
            $('html, body').animate({scrollTop:$(document).height()}, 'slow');
            if ($(window).width() >= 1024) {$('.anime, .anime2').slideDown("slow").fadeIn("slow", function () {});}
        });
    
});



