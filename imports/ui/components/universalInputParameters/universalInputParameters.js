import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.universalInputParameters.helpers({
  simulateDynamicPopulation () {
    return appVariableScope.simulateDynamicPopulation.get();
  }


});

Template.universalInputParameters.events({
    'keyup .aUniversalInput'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();
      var variable_name = $(event.currentTarget).data('name');
      appVariableScope[variable_name].set($(event.currentTarget).val());
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
