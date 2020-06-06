"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestions = exports.getMovie = exports.getMovies = void 0;

var _axios = _interopRequireDefault(require("axios"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API_URL = "https://yts.mx/api/v2/";
var MOVIE_LIST_URL = "".concat(API_URL, "list_movies.json");
var MOVIE_DETAIL_URL = "".concat(API_URL, "movie_datails.json");
var MOVIE_SUGGESTION_URL = "".concat(API_URL, "movie_suggestions.json");

var getMovies = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(limit, min_rating) {
    var _yield$axios$get, movies;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios["default"].get(MOVIE_LIST_URL, {
              params: {
                limit: limit,
                minimum_rating: min_rating
              }
            });

          case 3:
            _yield$axios$get = _context.sent;
            movies = _yield$axios$get.data.data.movies;
            return _context.abrupt("return", movies);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", null);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getMovies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMovies = getMovies;

var getMovie = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var _yield$axios$get2, movie;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log(MOVIE_DETAIL_URL);
            _context2.next = 4;
            return _axios["default"].get("https://yts.mx/api/v2/movie_details.json", {
              params: {
                movie_id: id
              }
            });

          case 4:
            _yield$axios$get2 = _context2.sent;
            movie = _yield$axios$get2.data.data.movie;
            console.log(movie);
            return _context2.abrupt("return", movie);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", null);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getMovie(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMovie = getMovie;

var getSuggestions = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var _yield$axios$get3, movies;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            console.log(MOVIE_DETAIL_URL);
            _context3.next = 4;
            return _axios["default"].get(MOVIE_SUGGESTION_URL, {
              params: {
                movie_id: id
              }
            });

          case 4:
            _yield$axios$get3 = _context3.sent;
            movies = _yield$axios$get3.data.data.movies;
            console.log(movies);
            return _context3.abrupt("return", movies);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", null);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getSuggestions(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSuggestions = getSuggestions;