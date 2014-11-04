# Neo4j to JS Graph

Convert neo4j responses to a [Graph](https://github.com/chenglou/data-structures/wiki/Graph) object.

See example.js:
``` js
var response  = require('./mock-response');
var util      = require('util');
var graphify  = require('../index');

var graph     = graphify(response.results[0]);

console.log(util.inspect(graph, { depth: null }));
```
