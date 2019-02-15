import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.universalInputParameters.helpers({
  simulateDynamicPopulation () {
    return appVariableScope.simulateDynamicPopulation.get();
  }


});

Template.universalInputParameters.events({
    'click .simulateMultiple'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();
  }
});

Template.universalInputParameters.onCreated(function() {
  var instance;
  instance = this;
  // instance.simulateMultiple = new ReactiveVar(false);


});

Template.universalInputParameters.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.universalInputParameters.onDestroyed(function() {

});
