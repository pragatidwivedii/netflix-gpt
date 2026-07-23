export const API_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular";

export const API_URL_TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated";

export const API_URL_TOP_UPCONMING = "https://api.themoviedb.org/3/movie/upcoming";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";