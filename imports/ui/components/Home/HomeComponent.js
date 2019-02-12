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
  // 'click .simulateMultipleLabel': function(e, instance) {
    'click .simulateMultipleLabel'(event, instance) {
      // event.preventDefault();
      // event.stopPropagation();
        alert("hi");

    var event_instance = instance;
    var el = $('.simulateMultipleCheckbox');
    if (el.is(':checked') == true){
      event_instance.simulateMultiple.set(false);
      alert("hi");
    }
    else{
      event_instance.simulateMultiple.set(true);
        alert("hey");
    }


  },
  'click .universalParametersLabel'(event, instance) {
    // event.preventDefault();
    // event.stopPropagation();
      alert("hi");

  var event_instance = instance;
  var el = $('.unversalParametersCheckbox');
  if (el.is(':checked') == true){
    event_instance.universalParameters.set(false);
    alert("hi");
  }
  else{
    event_instance.universalParameters.set(true);
      alert("hey");
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
  instance.simulateMultiple = new ReactiveVar(true);
  instance.universalParameters = new ReactiveVar(true);
  instance.simulateMultipleResults = new ReactiveVar(false);

});

Template.Home.onRendered(function() {
    Meteor.Loader.loadJs("/js/main.js");

});

Template.Home.onDestroyed(function() {

});
