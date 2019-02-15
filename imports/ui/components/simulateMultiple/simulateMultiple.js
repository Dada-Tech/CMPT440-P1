import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

import '../Graph/Graph.html';

Template.simulateMultiple.helpers({
  entries () {
    return appVariableScope.simulateMultipleInput.get();
  }


});

Template.simulateMultiple.events({
    'click .simulateMultiple'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();
  }
});

Template.simulateMultiple.onCreated(function() {
  var instance;
  instance = this;
  // instance.simulateMultiple = new ReactiveVar(false);


});

Template.simulateMultiple.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.simulateMultiple.onDestroyed(function() {

});
