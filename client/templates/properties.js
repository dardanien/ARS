$(document).ready(function() {
  Template.properties.rendered = function() {
    $('#example').DataTable();
  };
});