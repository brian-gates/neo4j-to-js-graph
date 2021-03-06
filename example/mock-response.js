/**
 * An example graph response from neo4j
 * http://neo4j.com/docs/stable/rest-api-transactional.html#rest-api-return-results-in-graph-format
 */
module.exports = {
  "results" : [ {
    "columns" : [ "bike", "p1", "p2" ],
    "data" : [ {
      "row" : [ {
        "weight" : 10
      }, [ {
        "weight" : 10
      }, {
        "position" : 1
      }, {
        "spokes" : 3
      } ], [ {
        "weight" : 10
      }, {
        "position" : 2
      }, {
        "spokes" : 32
      } ] ],
      "graph" : {
        "nodes" : [ {
          "id" : "17",
          "labels" : [ "Wheel" ],
          "properties" : {
            "spokes" : 3
          }
        }, {
          "id" : "16",
          "labels" : [ "Bike" ],
          "properties" : {
            "weight" : 10
          }
        }, {
          "id" : "18",
          "labels" : [ "Wheel" ],
          "properties" : {
            "spokes" : 32
          }
        } ],
        "relationships" : [ {
          "id" : "9",
          "type" : "HAS",
          "startNode" : "16",
          "endNode" : "17",
          "properties" : {
            "position" : 1
          }
        }, {
          "id" : "10",
          "type" : "HAS",
          "startNode" : "16",
          "endNode" : "18",
          "properties" : {
            "position" : 2
          }
        } ]
      }
    } ]
  } ],
  "errors" : [ ]
}
