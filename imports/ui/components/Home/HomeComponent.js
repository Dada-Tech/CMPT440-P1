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
import '../universalInputParameters/universalInputParameters.js'
import '../multipleInput/multipleInput.html'
import '../multipleInput/multipleInput.js'
import '../simulateMultiple/simulateMultiple.html'
import '../simulateMultiple/simulateMultiple.js'
import '../simulateSingle/simulateSingle.html'
import '../simulateSingle/simulateSingle.js'


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
'click .dynamicPopulationSwitch'(event, instance) {
  // event.preventDefault();
  // event.stopPropagation();
var event_instance = instance;
var el = $('.simulateDynamicPopulationCheckbox');
if (el.is(':checked') == true){
  appVariableScope.simulateDynamicPopulation.set(true);
}
else{
  appVariableScope.simulateDynamicPopulation.set(false);
}


},
'click .simulateMultipleResults '(event, instance) {
  event.preventDefault();
  event.stopPropagation();
  appVariableScope.simulateMultipleResults.set(true);
  setTimeout(function(){
    var $switch = $('.universalParametersSwitch');

  $switch.on('click', function(e){
      var $switchInput = $(this).find('.c-switch__input');

      if ( !$(this).hasClass('is-disabled') ) {
        if ($(this).hasClass('is-active') && $switchInput.attr('checked')) {
            $switchInput.removeAttr('checked');
            $(this).removeClass('is-active');
        } else {
            $switchInput.attr('checked', 'checked')
            $(this).addClass('is-active');
        }
      }
        // return false;
    });

  }, 500);


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
  appVariableScope.simulateDynamicPopulation = new ReactiveVar(false);
  appVariableScope.simulateHerdImmunity = new ReactiveVar(false);

});

Template.Home.onRendered(function() {
    Meteor.Loader.loadJs("/js/main.js");
    Meteor.Loader.loadJs("/js/plotly.js");

    var $switch = $('.c-switch');

  $switch.on('click', function(e){
      var $switchInput = $(this).find('.c-switch__input');

      if ( !$(this).hasClass('is-disabled') ) {
        if ($(this).hasClass('is-active') && $switchInput.attr('checked')) {
            $switchInput.removeAttr('checked');
            $(this).removeClass('is-active');
        } else {
            $switchInput.attr('checked', 'checked')
            $(this).addClass('is-active');
        }
      }
        // return false;
    });

});

Template.Home.onDestroyed(function() {

});
