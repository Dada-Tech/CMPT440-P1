import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

import '../layout/main.html'
import '../base/Container.html'
import '../base/Link.html'
import '../base/Button.html'
import './HomeComponent.html'
import '../Graph/Graph.html';
import '../Graph/Graph.js';
import '../universalInputParameters/universalInputParameters.html'
import '../multipleInput/multipleInput.html'
import '../simulateMultiple/simulateMultiple.html'
import '../simulateSingle/simulateSingle.html'


appVariableScope = {}

Template.Home.helpers({
  settings () {
    return Meteor.settings.public
  },
  simulateMultipleDiseases () {
    return appVariableScope.simulateMultiple.get();
  },
  universalParameters () {
    return appVariableScope.universalParameters.get();
  },
  simulateMultipleResults () {
    return appVariableScope.simulateMultipleResults.get();
  },


});

Template.Home.events({
    'click .simulateMultiple'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();

      var event_instance = instance;
      var el = $('.simulateMultipleCheckbox');
      if (el.is(':checked') == true){
        appVariableScope.simulateMultiple.set(true);
      }
      else{
        appVariableScope.simulateMultiple.set(false);
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
    appVariableScope.universalParameters.set(true);
  }
  else{
    appVariableScope.universalParameters.set(false);
  }


},
'click .simulateMultipleResults'(event, instance) {
  event.preventDefault();
  event.stopPropagation();
  appVariableScope.simulateMultipleResults.set(true);
},
'click .simulateMultipleEdit'(event, instance) {
  event.preventDefault();
  event.stopPropagation();
  appVariableScope.simulateMultipleResults.set(false);
},
});

Template.Home.onCreated(function() {
  var instance;
  instance = this;
  appVariableScope.simulateMultiple = new ReactiveVar(false);
  appVariableScope.universalParameters = new ReactiveVar(false);
  appVariableScope.simulateMultipleResults = new ReactiveVar(false);
  appVariableScope.simulateSingleInput = new ReactiveVar({});
  appVariableScope.simulateMultipleInput = new ReactiveVar([]);

});

Template.Home.onRendered(function() {
    Meteor.Loader.loadJs("/js/main.js");
    Meteor.Loader.loadJs("/js/plotly.js");

});

Template.Home.onDestroyed(function() {

});
