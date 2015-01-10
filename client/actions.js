$(document).ready(function () {
  Session.set("tname", "noSelection");
  
  $("#addDataObject").click(function(e) {
    e.preventDefault();
    Session.set("tname", "dataObject");
  });
  $("#addDataObjectSet").click(function(e) {
    e.preventDefault();
    Session.set("tname", "noSelection");
  }); 
});