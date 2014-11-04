var Graph = require('data-structures').Graph;
var _     = require('lodash');


function processResult(result) {
  var data = result.data[0].graph;
  var graph = new Graph();
  data.nodes.forEach(function (node) {
    var n = graph.addNode(node.id);
    _.extend(n, _.pick(node, 'labels', 'properties'));
  });

  data.relationships.forEach(function (relationship) {
    var rel = graph.addEdge(relationship.startNode, relationship.endNode);
    _.extend(rel, _.pick(relationship, 'type', 'properties', 'id'));
  });
  return graph;
}

module.exports = processResult;
