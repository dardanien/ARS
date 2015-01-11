Template.detailForm.events ({
  "click button": function(e) {
    e.preventDefault();
    console.log("toto " + $("span"));
    if ($("expander span").hasClass("glyphicon-collapse-up")) {
      $("expander span").removeClass("glyphicon-collapse-up");
      $("expander span").addClass("glyphicon-collapse-down");
    } else {
      $("expander span").removeClass("glyphicon-collapse-down");
      $("expander span").addClass("glyphicon-collapse-up");
    }
  }
});