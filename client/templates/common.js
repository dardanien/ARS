
Template.detailForm.helpers ({
  templateName: function() {
    return Session.get("detailPageName");
  },
  editMode: function() {
      return Session.get("editMode");
  }
});

Template.detailForm.events ({
  "click #addDataObject": function(event) {
  }
});