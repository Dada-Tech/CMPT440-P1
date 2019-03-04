import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'



Template.simulateSingle.helpers({
  beta_parameter () {
    return Template.instance().beta.get();
  },
  gamma_parameter () {
    return Template.instance().gamma.get();
  },
  susceptible_population () {
    return Template.instance().susceptible.get();
  },
  infected_population () {
    return Template.instance().infected.get();
  },
  recovered_population () {
    return Template.instance().recovered.get();
  },
  days_parameter () {
    return Template.instance().days.get();
  },
  birth_rate () {
    return Template.instance().birth.get();
  },
  death_rate () {
    return Template.instance().death.get();
  },
  percent_immune () {
    return Template.instance().percent_immune.get();
  },
  simulateDynamicPopulation () {
    return appVariableScope.simulateDynamicPopulation.get();
  },
  simulateHerdImmunity () {
    return appVariableScope.simulateHerdImmunity.get();
  },
  infected_population(){
    return Template.instance().infected.get();
  },
  render_graph(){
    return Template.instance().render_graph.get();
  },
  loading(){
    return Template.instance().loading.get();
  }

});

Template.simulateSingle.events({
    'click .simulate'(event, instance) {
      event.preventDefault();
      event.stopPropagation();

      instance.loading.set(true);

      var beta_parameter = $(".inputBeta").val();
      instance.beta.set(beta_parameter);

      var gamma_parameter = $(".inputGamma").val();
      instance.gamma.set(gamma_parameter);

      var susceptible_population = $(".inputSusceptible").val();
      instance.susceptible.set(susceptible_population);

      var infected_population = $(".inputInfected").val();
      instance.infected.set(infected_population);

      var recovered_population = $(".inputRecovered").val();
      instance.recovered.set(recovered_population);

      var days_parameter = $(".inputDays").val();
      instance.days.set(days_parameter);

      var percent_immune = $(".inputHerdImmunity").val();
      instance.percent_immune.set(percent_immune);

      var birth_rate = $(".inputBirth").val();
      instance.birth.set(birth_rate);

      var death_rate = $(".inputDeath").val();
      instance.death.set(death_rate);

      instance.render_graph.set(true);
      setTimeout(function(){
        instance.loading.set(false);
      }, 5000);


    //   setTimeout(function(){
    //     // $('#singleSimulationForm').parsley().validate();
    //
    //     var validation = $('#singleSimulationForm').parsley().getErrorsMessages();
    //     alert(validation);
    // 		if(validation == true){
    //
    //     }
    //
    // }, 1000);

    }
});

Template.simulateSingle.onCreated(function() {
  var instance;
  instance = this;
  instance.beta = new ReactiveVar(0);
  instance.gamma = new ReactiveVar(0);
  instance.susceptible = new ReactiveVar(0);
  instance.infected = new ReactiveVar(0);
  instance.recovered = new ReactiveVar(0);
  instance.days = new ReactiveVar(0);
  instance.birth = new ReactiveVar(0);
  instance.death = new ReactiveVar(0);
  instance.percent_immune = new ReactiveVar(0);
  instance.render_graph = new ReactiveVar(false);
  instance.loading = new ReactiveVar(false);


});

Template.simulateSingle.onRendered(function() {
    // Meteor.Loader.loadJs("/js/main.js");
    // this.autorun(() => {
    //   $(".inputHerdImmunity").asRange({
    //       step: 0.01,
    //       range: false,
    //       min: 0,
    //       max: 1
    //   });
    //
    //   $(".inputHerdImmunity").on('asRange::change', function (e) {
    //
    //   });
    // });

});

Template.simulateSingle.onDestroyed(function() {

});
