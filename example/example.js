var response  = require('./mock-response');
var util      = require('util');
var graphify  = require('../index');

var graph     = graphify(response.results[0]);

console.log(util.inspect(graph, { depth: null }));
