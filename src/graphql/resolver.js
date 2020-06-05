import { getMovie, getMovies, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, min_rating }) => getMovies(limit, min_rating),
    movie: function (_, { id }) {
      const result = getMovie(id);
      console.log(result);
      return result;
    },
    suggestions: function (_, { id }) {
      const result = getSuggestions(id);
      return result;
    },
  },
};

export default resolvers;
