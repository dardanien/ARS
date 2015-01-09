$(document).ready(function () {
    var offset = 660;
    var oldOffset = 0;
    resizeContent = function () {
        var size = window.outerWidth;
        if (size - offset>200) {
            $("#page-content-wrapper").width(size - offset);
            $("#nav1").width(size - offset);
            $("#info").text($("#nav1").width() + "-" + $("#page-content-wrapper").width());
        }
    };
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled1");

        if (offset === 460)
            offset = 660;
        else
            offset = 460;
        resizeContent();
    });
    $("#menu-toggle2").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled2");
        if (oldOffset === 0) {
            oldOffset = offset;
            offset = 60;
        } else {
            offset = oldOffset;
            oldOffset = 0;
        }
        resizeContent();
    });
    window.onresize = function (event) {
        var size = window.outerWidth;
        $("#info").text(offset);
        if (size - offset>200) {
            $("#page-content-wrapper").addClass("notransition");
            $("#page-content-wrapper").width(size - offset);
            $("#nav1").width(size - offset);
            $("#page-content-wrapper").removeClass("notransition");
        }
    };
    resizeContent();
    window.onscroll = function(event){
        $("#info").text(window.scrollMaxY);
    };
});