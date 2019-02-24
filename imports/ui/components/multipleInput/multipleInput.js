import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.multipleInput.helpers({
  entries () {
    return appVariableScope.simulateMultipleInput.get();
  },
  simulateDynamicPopulation () {
    return appVariableScope.simulateDynamicPopulation.get();
  }


});

Template.multipleInput.events({
    'click .addInput'(event, instance) {
      var mulipleInputs = appVariableScope.simulateMultipleInput.get();
      mulipleInputs.push({
        random_id: Math.random().toString(36).slice(2),
        beta : appVariableScope.universal_beta.get(),
        gamma : appVariableScope.universal_gamma.get(),
        susceptible : appVariableScope.universal_susceptible.get(),
        infected : appVariableScope.universal_infected.get(),
        recovered : appVariableScope.universal_recovered.get(),
        days : appVariableScope.universal_days.get(),
        birth : appVariableScope.universal_birth.get(),
        death : appVariableScope.universal_death.get()
      });
      appVariableScope.simulateMultipleInput.set(mulipleInputs);
  },
  'click .removeInput'(event, instance) {
    var random_id = this.random_id;
    var mulipleInputs = appVariableScope.simulateMultipleInput.get();
    var filteredInputs = mulipleInputs.filter(function(inputRow){
       return inputRow.random_id != random_id;
   });
    appVariableScope.simulateMultipleInput.set(filteredInputs);
  },
  'keyup .c-input'(event, instance) {
    // event.preventDefault();
    // event.stopPropagation();
    setTimeout(function(){
      var mulipleInputs = appVariableScope.simulateMultipleInput.get();
      var variable_name = $(event.currentTarget).data('name');
      var row_id = $(event.currentTarget).data('rowid');
      mulipleInputs.find(x => x.random_id === row_id)[variable_name] = $(event.currentTarget).val();
    }, 500);

}
});

Template.multipleInput.onCreated(function() {
  var instance;
  instance = this;
  appVariableScope.universal_beta = new ReactiveVar(0);
  appVariableScope.universal_gamma = new ReactiveVar(0);
  appVariableScope.universal_susceptible = new ReactiveVar(0);
  appVariableScope.universal_infected = new ReactiveVar(0);
  appVariableScope.universal_recovered = new ReactiveVar(0);
  appVariableScope.universal_days = new ReactiveVar(0);
  appVariableScope.universal_birth = new ReactiveVar(0);
  appVariableScope.universal_death = new ReactiveVar(0);
  // instance.simulateMultiple = new ReactiveVar(false);


});

Template.multipleInput.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");

});

Template.multipleInput.onDestroyed(function() {

});
