# Neo4j to JS Graph

Convert neo4j graph responses to a traversable [Graph](https://github.com/chenglou/data-structures/wiki/Graph) object.

See example.js:
``` js
var response  = require('./mock-response');
var util      = require('util');
var graphify  = require('../index');

var graph     = graphify(response.results[0]);

console.log(util.inspect(graph, { depth: null }));
```
Would output: 
``` js
{ _nodes:
   { '16':
      { _outEdges:
         { '17': { weight: 1, type: 'HAS', properties: { position: 1 }, id: '9' },
           '18': { weight: 1, type: 'HAS', properties: { position: 2 }, id: '10' } },
        _inEdges: {},
        labels: [ 'Bike' ],
        properties: { weight: 10 } },
     '17':
      { _outEdges: {},
        _inEdges: { '16': { weight: 1, type: 'HAS', properties: { position: 1 }, id: '9' } },
        labels: [ 'Wheel' ],
        properties: { spokes: 3 } },
     '18':
      { _outEdges: {},
        _inEdges: { '16': { weight: 1, type: 'HAS', properties: { position: 2 }, id: '10' } },
        labels: [ 'Wheel' ],
        properties: { spokes: 32 } } },
  nodeSize: 3,
  edgeSize: 2 }

```
