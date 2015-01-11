                          
Template.expander.events ({
  "click button": function(e) {
    e.preventDefault();
    // change the icon
    var spanx= $(e.target).parent().find("span");

    if (spanx.hasClass("glyphicon-collapse-up")) {
      spanx.removeClass("glyphicon-collapse-up");
      spanx.addClass("glyphicon-collapse-down");
    } else {
      spanx.removeClass("glyphicon-collapse-down");
      spanx.addClass("glyphicon-collapse-up");
    }
    // hide/show the sibbling form
    var formx= $(e.target).parents("div").next(".collapse");
    console.log("toto " + formx.length );
    formx.toggle();
  }
});