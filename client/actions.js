$(document).ready(function () {
  Session.set("detailPageName", "noSelection");
  Session.set("editMode", false);
  
  $("#addObjectMenu").find("a").each(function () {
    $(this).click(function(e) {
      e.preventDefault();
      Session.set("detailPageName", $(this).context.id);
      Session.set("editMode", true);
    }); 
  });

});