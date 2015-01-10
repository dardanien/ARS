$(document).ready(function () {
  Session.set("detailPageName", "noSelection");
  Session.set("editMode", false);
  
  $("#addDataObject").click(function(e) {
    e.preventDefault();
    Session.set("detailPageName", "dataObject");
    Session.set("editMode", true);
  });
  $("#addDataObjectSet").click(function(e) {
    e.preventDefault();
    Session.set("detailPageName", "noSelection");
    Session.set("editMode", false);
  }); 
});