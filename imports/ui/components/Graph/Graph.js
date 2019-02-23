import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'
import * as math from 'mathjs'

Template.Graph.helpers({
  modelName () {
    return Template.instance().modelName.get();
  },
  random_id(){
    return Template.instance().random_id.get();
  }


});

Template.Graph.events({

});

Template.Graph.onCreated(function() {
  Meteor.Loader.loadJs("/js/plotly.js");
  // Meteor.Loader.loadJs("/js/math.js");
  var instance;
  instance = this;
  // alert("Hi");
  instance.susceptible_population = new ReactiveVar(3);
  instance.infected_population = new ReactiveVar(4);
  instance.recovered_population = new ReactiveVar(5);
  instance.total_population = new ReactiveVar(instance.susceptible_population.get() + instance.infected_population.get() + instance.recovered_population.get());
  instance.beta = new ReactiveVar(5);
  instance.gamma = new ReactiveVar(6);
  instance.birth_rate = new ReactiveVar(0);
  instance.death_rate = new ReactiveVar(0);
  instance.days = new ReactiveVar(100);
  instance.modelName = new ReactiveVar("SIRS");
  instance.random_id = new ReactiveVar(Math.random().toString(36).slice(2));

  instance.modelName.set("SIR");

  //checking to see if we need to use SIRS model
  //if birth and death rate = 0, not a dynamic population
  if (instance.birth_rate.get() == 0 && instance.death_rate.get() == 0)
  {
    instance.modelName.set("SIR");
    // instance.susceptible_derivative = new ReactiveVar(-(instance.beta.get()) * instance.susceptible_population.get() * instance.infected_population.get() / instance.total_population.());
    // instance.infected_derivative = new ReactiveVar('beta * susceptible_population * infected_population / total_population - gamma * infected_population', 'infected_population');
    // instance.recovered_derivative = new ReactiveVar('gamma * infected_population', 'recovered_population');

  } else //if birth and death rate > 0 then this uses a dynamic population, therefore we must include death and birth rate as variabeles
  {
    instance.modelName.set("SIR With Dynamics");
    // instance.susceptible_derivative = new ReactiveVar('(birth_rate * total_population) - (beta * susceptible_population * infected_population) - (death_rate * susceptible_population)', 'susceptible_population');
    // instance.infected_derivative = new ReactiveVar('(beta * susceptible_population * infected_population / total_population) - (gamma * infected_population) - (death_rate * infected_population)', 'infected_population');
    // instance.recovered_derivative = new ReactiveVar('(gamma * infected_population) - (death_rate * recovered_population)', 'recovered_population');


  }







});

Template.Graph.onRendered(function() {
  // alert("Hi");

  var template_instance = Template.instance();
  console.log(template_instance.days.get());
  // template_instance.susceptible_derivative.get();
  setTimeout(function(){


    const xValues = math.range(0, template_instance.days.get(), 5).toArray();
    const yValues = xValues.map(function (x) {
      // return math.derivative(template_instance.susceptible_derivative.get(), 'x').eval({x: x});
      return x*2;
    })

    console.log(xValues);
    console.log(yValues);

    var trace = {
      x: xValues,
      y: yValues,
      mode: 'line'
    };
    var data = [trace];

    var chart_id = "chart-" + template_instance.random_id.get();
    Plotly.newPlot(chart_id, data);

}, 1000);
});

Template.Graph.onDestroyed(function() {

});
