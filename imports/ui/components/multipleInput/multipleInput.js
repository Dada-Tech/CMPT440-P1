import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.multipleInput.helpers({
  // simulateMultiple () {
  //   return Template.instance().simulateMultiple.get();
  // }


});

Template.multipleInput.events({
    'click .simulateMultiple'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();
  }
});

Template.multipleInput.onCreated(function() {
  var instance;
  instance = this;
  // instance.simulateMultiple = new ReactiveVar(false);


});

Template.multipleInput.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.multipleInput.onDestroyed(function() {

});
