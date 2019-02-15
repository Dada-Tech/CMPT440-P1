import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

Template.Graph.helpers({
  modelName () {
    return Template.instance().modelName.get();
  }


});

Template.Graph.events({

});

Template.Graph.onCreated(function() {
  instance.modelName = new ReactiveVar("SIRS");

  instance.modelName.set("SIR");
  var instance;
  instance = this;
  // alert("Hi");
  var susceptible_population = 3;
  var infected_population = 4;
  var recovered_population = 5;
  var total_population = susceptible_population + infected_population + recovered_population;
  var beta = 5;
  var gamma = 6;
  var birth_rate = 0;
  var death_rate = 0;
  var days = 50;



  

  setTimeout(function(){
    var chartPayout = $(".chart");
    for (var i = 0; i < chartPayout.length; i++) {
      var chart = chartPayout[i];

    var lineChartPayoutData = {
        labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
        datasets: [{
        label: "Sold",
        fill: true,
        lineTension: 0,
        backgroundColor: 'rgba(163,136,227, 0.1)',
        borderWidth: 2,
        borderColor: "#886CE6",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointStyle: 'cross',
        pointRadius: 0,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#2a2f37",
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#FC2055",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 5,
        data: [40, 32, 42, 28, 53, 34],
        spanGaps: false
        }]
    };

  var lineChartPayout = new Chart(chart, {
      type: 'line',
      data: lineChartPayoutData,
      options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
            display: false,
            ticks: {
            fontSize: '11',
            fontColor: '#969da5'
          },
          gridLines: {
            color: 'rgba(0,0,0,0.0)',
            zeroLineColor: 'rgba(0,0,0,0.0)'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
            max: 55
          }
        }]
      }
    }
  });
  }
}, 500);


});

Template.Graph.onRendered(function() {
  // alert("Hi");
});

Template.Graph.onDestroyed(function() {

});
