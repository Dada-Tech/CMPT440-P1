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
});

Template.Home.events({
  'click .simulateMultipleLabel': function(e, instance) {
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
});

Template.Home.onCreated(function() {
  var instance;
  instance = this;
  instance.simulateMultiple = new ReactiveVar(false);
});

Template.Home.onRendered(function() {
    Meteor.Loader.loadJs("/js/main.js");

});

Template.Home.onDestroyed(function() {

});
