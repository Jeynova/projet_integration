$('document').ready(function(){
    $('#navBut').click(function () {
        $(this).toggleClass("change");
        $("body").toggleClass("has-overlay");
});



    $('#navBut').click( function() {
        var toggleWidth = $("#sidenavBar").width() == 250 ? "0px" : "250px";
        $('#sidenavBar').animate({ width: toggleWidth });
        $('#blackened').toggleClass("overlay-window");

    });



})