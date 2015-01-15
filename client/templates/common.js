
Template.detailTools.helpers ({
  editMode: function() {
      return Session.get("editMode");
  }
});

Template.detailForm.helpers ({
  templateName: function() {
    return Session.get("detailPageName");
  }
});


Template.detailForm.events ({
  "click #addDataObject": function( event) {
  }
});