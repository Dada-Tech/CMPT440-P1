import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'
import * as math from 'mathjs'
// var Calculess = require('calculess');
// var Calc = Calculess.prototype;
// var Calculess = require('calculess');


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

  // //checking to see if we need to use SIRS model
  // //if birth and death rate = 0, not a dynamic population
  // if (instance.birth_rate.get() == 0 && instance.death_rate.get() == 0)
  // {
  //   instance.modelName.set("SIR");
  //   instance.susceptible_derivative = new ReactiveVar(-(instance.beta.get()) * instance.susceptible_population.get() * instance.infected_population.get() / instance.total_population.get());
  //   // instance.infected_derivative = new ReactiveVar('beta * susceptible_population * infected_population / total_population - gamma * infected_population', 'infected_population');
  //   // instance.recovered_derivative = new ReactiveVar('gamma * infected_population', 'recovered_population');

  // } else //if birth and death rate > 0 then this uses a dynamic population, therefore we must include death and birth rate as variabeles
  // {
  //   instance.modelName.set("SIR With Dynamics");
  //   // instance.susceptible_derivative = new ReactiveVar('(birth_rate * total_population) - (beta * susceptible_population * infected_population) - (death_rate * susceptible_population)', 'susceptible_population');
  //   // instance.infected_derivative = new ReactiveVar('(beta * susceptible_population * infected_population / total_population) - (gamma * infected_population) - (death_rate * infected_population)', 'infected_population');
  //   // instance.recovered_derivative = new ReactiveVar('(gamma * infected_population) - (death_rate * recovered_population)', 'recovered_population');


  // }



  Meteor.call('callScript', function(err, result) {
    if (err) {
      console.warn("Error : ", err)
    }
    console.log(result);
  });



});

Template.Graph.onRendered(function() {
  // alert("Hi");

  var template_instance = Template.instance();
  console.log(template_instance.days.get());
  // template_instance.susceptible_derivative.get();
  setTimeout(function(){
    function sin(x) {
        return Math.sin(x);
        // return template_instance.susceptible_derivative.get();
    }

    var B, k, initInf, initPop, ds, dr, di, sus, inf, rec, timeStep, time;

    B = 1;
    k = 0.5;

    sus = 100;
    inf = 1;
    rec = 0;
    pop = sus + inf + rec;
    const xValues = math.range(0, template_instance.days.get(), 1).toArray();
    
    // calculating ds
    const yValues = xValues.map(function (x) {
      ds = -B * (sus * inf / pop);
      sus += ds;
      di = (B * (sus * inf / pop) - (k * inf));
      inf += di;
      dr = k * inf;
      rec += dr;
      return sus;
    })

    //have to reassign SIR for our model to work
    sus = 100;
    inf = 1;
    rec = 0;
    // calculating di
    const yValuesI = xValues.map(function (x) {
      ds = -B * (sus * inf / pop);
      sus += ds;
      di = (B * (sus * inf / pop) - (k * inf));
      inf += di;
      dr = k * inf;
      rec += dr;
      return inf;
    })

    sus = 100;
    inf = 1;
    rec = 0;
    // calculating dr
    const yValuesR = xValues.map(function (x) {
      ds = -B * (sus * inf / pop);
      sus += ds;
      di = (B * (sus * inf / pop) - (k * inf));
      inf += di;
      dr = k * inf;
      rec += dr;
      return rec;
    })

    // console.log(xValues);
    // console.log(yValues);

    // drawing the trace lines on the graph for the susceptible, infected and recovered 
    var trace = {
      x: xValues,
      y: yValues,
      mode: 'line',
      name: 'Susceptible'
    };
    var trace2 = {
      x: xValues,
      y: yValuesI,
      mode: 'line',
      name: 'Infected'
    };
    var trace3 = {
      x: xValues,
      y: yValuesR,
      mode: 'line',
      name: 'Recovered'
    };
  
    var data = [trace, trace2, trace3];

    var chart_id = "chart-" + template_instance.random_id.get();
    Plotly.newPlot(chart_id, data);
    // Plotly.addTraces(chart_id, {y: [2,1,2]});

}, 1000);
});

Template.Graph.onDestroyed(function() {

});
