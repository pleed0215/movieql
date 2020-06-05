"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolver = _interopRequireDefault(require("./graphql/resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers: _resolver["default"]
});
server.start(function () {
  return console.log("Server is running on localhost:4000");
});