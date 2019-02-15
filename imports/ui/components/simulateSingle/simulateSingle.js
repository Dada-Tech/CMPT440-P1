import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.simulateSingle.helpers({
  // simulateMultiple () {
  //   return Template.instance().simulateMultiple.get();
  // }


});

Template.simulateSingle.events({
    'click .simulateMultiple'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();
  }
});

Template.simulateSingle.onCreated(function() {
  var instance;
  instance = this;
  // instance.simulateMultiple = new ReactiveVar(false);


});

Template.simulateSingle.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.simulateSingle.onDestroyed(function() {

});
