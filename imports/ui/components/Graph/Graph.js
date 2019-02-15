import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.Graph.helpers({
  // simulateMultiple () {
  //   return Template.instance().simulateMultiple.get();
  // }


});

Template.Graph.events({
    'click .simulateMultiple'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();
  }
});

Template.Graph.onCreated(function() {
  var instance;
  instance = this;
  // instance.simulateMultiple = new ReactiveVar(false);


});

Template.Graph.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.Graph.onDestroyed(function() {

});
