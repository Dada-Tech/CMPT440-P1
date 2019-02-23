import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'



Template.simulateSingle.helpers({
  susceptible_population () {
    return Template.instance().susceptible.get();
  },
  simulateDynamicPopulation () {
    return appVariableScope.simulateDynamicPopulation.get();
  },
  infected_population(){
    return Template.instance().infected.get();
  }


});

Template.simulateSingle.events({
    'click .simulate'(event, instance) {
      var susceptible_population = $(".inputSusceptible").val();
      var infected_population = $(".inputInfected").val();
      instance.susceptible.set(susceptible_population);
      instance.infected.set(infected_population);
  }
});

Template.simulateSingle.onCreated(function() {
  var instance = this;
  instance.susceptible = new ReactiveVar(0);
  instance.infected = new ReactiveVar(4);


});

Template.simulateSingle.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.simulateSingle.onDestroyed(function() {

});
