import http from "./http";
import { GITHUB_API_URL, MOVIE_DB_API_URL } from "@env";

let githubBaseUrl = GITHUB_API_URL;
let baseUrl = MOVIE_DB_API_URL;

export class ApiNetworkService {
  static getGithubUsers() {
    // return http.get(`${githubBaseUrl}/${Endpoints.USERS}`);
  }

  static getMovies(endpoint: string) {
    return http.get(`${baseUrl}/${endpoint}`);
  }
}

//*ENDPOINTS *//
export class Endpoints {
  static USERS = "users";

  
  static DISCOVER_MOVIES = "discover/movie";
  static TRENDING_ALL = "trending/all/day";
  static NOW_PLAYING_MOVIES = "movie/now_playing";
  static POPULAR_MOVIES = "movie/popular";
  static TOP_RATED_MOVIES = "movie/top_rated";
  static UPCOMING_MOVIES = "movie/upcoming";
  static TRENDING_TV = "trending/tv/day";
  static SEARCH_All = "search/multi";
}

// functions to get images of different widths, (show images using these to improve the loading times)
export const movieImageUrl500 = (posterPath: string | null) =>
  posterPath ? "https://image.tmdb.org/t/p/w500" + posterPath : null;
export const movieImageUrl342 = (posterPath: string | null) =>
  posterPath ? "https://image.tmdb.org/t/p/w342" + posterPath : null;
export const movieImageUrl185 = (posterPath: string | null) =>
  posterPath ? "https://image.tmdb.org/t/p/w185" + posterPath : null;
export const movieImageUrlOriginal = (posterPath: string | null) =>
  posterPath ? "https://image.tmdb.org/t/p/original" + posterPath : null;


