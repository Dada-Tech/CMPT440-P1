import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.simulateSingle.helpers({
  susceptible_population () {
    return Template.instance().susceptible.get();
  }


});

Template.simulateSingle.events({
    'click .simulate'(event, instance) {
      var susceptible_population = $(".inputSusceptible").val();
      instance.susceptible.set(susceptible_population);
  }
});

Template.simulateSingle.onCreated(function() {
  var instance;
  instance = this;
  instance.susceptible = new ReactiveVar(0);


});

Template.simulateSingle.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.simulateSingle.onDestroyed(function() {

});
