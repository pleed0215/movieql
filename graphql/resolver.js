"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = require("./db");

var resolvers = {
  Query: {
    movies: function movies(_, _ref) {
      var limit = _ref.limit,
          min_rating = _ref.min_rating;
      return (0, _db.getMovies)(limit, min_rating);
    },
    movie: function movie(_, _ref2) {
      var id = _ref2.id;
      var result = (0, _db.getMovie)(id);
      console.log(result);
      return result;
    },
    suggestions: function suggestions(_, _ref3) {
      var id = _ref3.id;
      var result = (0, _db.getSuggestions)(id);
      return result;
    }
  }
};
var _default = resolvers;
exports["default"] = _default;