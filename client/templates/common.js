
Template.detailForm.helpers ({
  templateName: function() {
    return Session.get("tname");
  }
});

Template.detailForm.events ({
  "click #addDataObject": function(event) {
    Session.set("tname", "dataObject");
  }
});