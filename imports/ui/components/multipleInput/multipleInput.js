import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.multipleInput.helpers({
  entries () {
    return appVariableScope.simulateMultipleInput.get();
  },
  simulateDynamicPopulation () {
    return appVariableScope.simulateDynamicPopulation.get();
  }


});

Template.multipleInput.events({
    'click .addInput'(event, instance) {
      var mulipleInputs = appVariableScope.simulateMultipleInput.get();
      mulipleInputs.push({});
      appVariableScope.simulateMultipleInput.set(mulipleInputs);
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
