import axios from "axios";
import "@babel/polyfill";

const API_URL = "https://yts.mx/api/v2/";
const MOVIE_LIST_URL = `${API_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${API_URL}movie_datails.json`;
const MOVIE_SUGGESTION_URL = `${API_URL}movie_suggestions.json`;

export const getMovies = async (limit, min_rating) => {
  try {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(MOVIE_LIST_URL, {
      params: {
        limit,
        minimum_rating: min_rating,
      },
    });

    return movies;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMovie = async (id) => {
  try {
    console.log(MOVIE_DETAIL_URL);
    const {
      data: {
        data: { movie },
      },
    } = await axios.get("https://yts.mx/api/v2/movie_details.json", {
      params: {
        movie_id: id,
      },
    });
    console.log(movie);
    return movie;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSuggestions = async (id) => {
  try {
    console.log(MOVIE_DETAIL_URL);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(MOVIE_SUGGESTION_URL, {
      params: {
        movie_id: id,
      },
    });
    return movies;
  } catch (error) {
    return null;
  }
};
