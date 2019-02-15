import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.Graph.helpers({
  modelName () {
    return Template.instance().modelName.get();
  }


});

Template.Graph.events({
    'click .simulateMultiple'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();
  }
});

Template.Graph.onCreated(function() {
  instance.modelName = new ReactiveVar("SIRS");

  instance.modelName.set("SIR");
  var instance;
  instance = this;
  alert("Hi");
  var susceptible_population = 3;
  var infected_population = 4;
  var recovered_population = 5;
  var total_population = susceptible_population + infected_population + recovered_population;
  var beta = 5;
  var gamma = 6;
  var birth_rate = 0;
  var death_rate = 0;
  var days = 50;



  


});

Template.Graph.onRendered(function() {
  alert("Hi");
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.Graph.onDestroyed(function() {

});
