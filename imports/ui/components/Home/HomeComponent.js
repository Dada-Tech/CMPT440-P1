import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

import '../layout/main.html'
import '../base/Container.html'
import '../base/Link.html'
import '../base/Button.html'
import './HomeComponent.html'

Template.Home.helpers({
  settings () {
    return Meteor.settings.public
  },
  simulateMultiple () {
    return Template.instance().simulateMultiple.get();
  },
  universalParameters () {
    return Template.instance().universalParameters.get();
  },
  simulateMultipleResults () {
    return Template.instance().simulateMultipleResults.get();
  },


});

Template.Home.events({
    'click .simulateMultiple'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();

      var event_instance = instance;
      var el = $('.simulateMultipleCheckbox');
      if (el.is(':checked') == true){
        event_instance.simulateMultiple.set(true);
      }
      else{
        event_instance.simulateMultiple.set(false);
      }





  }, // this is for SIR Model, we will be creating the SIR Model with no
  	 // extra parameters, just calculating susceptible, infected, recovered
     'click .simulateSingle'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();

      var event_instance = instance;
      var susceptiblePopulation = $('.inputSusceptible').val();
      var infectedPopulation = $('.inputInfected').val();
      var recoveredPopulation = $('.inputRecovered').val();





  },
  'click .universalParametersSwitch'(event, instance) {
    // event.preventDefault();
    // event.stopPropagation();


  var event_instance = instance;
  var el = $('.universalParametersCheckbox');
  if (el.is(':checked') == true){
    event_instance.universalParameters.set(true);
  }
  else{
    event_instance.universalParameters.set(false);
  }


},
'click .simulateMultipleResults'(event, instance) {
  event.preventDefault();
  event.stopPropagation();
  instance.simulateMultipleResults.set(true);
},
'click .simulateMultipleEdit'(event, instance) {
  event.preventDefault();
  event.stopPropagation();
  instance.simulateMultipleResults.set(false);
},
});

Template.Home.onCreated(function() {
  var instance;
  instance = this;
  instance.simulateMultiple = new ReactiveVar(false);
  instance.universalParameters = new ReactiveVar(false);
  instance.simulateMultipleResults = new ReactiveVar(false);

});

Template.Home.onRendered(function() {
    Meteor.Loader.loadJs("/js/main.js");

});

Template.Home.onDestroyed(function() {

});
