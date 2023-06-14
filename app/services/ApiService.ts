import http from "./http";
import { GITHUB_API_URL, MOVIE_DB_API_URL } from "@env";

// let baseUrl = GITHUB_API_URL;
let baseUrl = MOVIE_DB_API_URL;

export class ApiNetworkService {
  static getGithubUsers() {
    // return http.get(`${baseUrl}/${Endpoints.USERS}`);
    // return http.get(`${baseUrl}/${Endpoints.TRENDING_MOVIE}`);
  }

  static getNowPlayingMovies() {
    // return http.get(`${baseUrl}/${Endpoints.USERS}`);
    return http.get(`${baseUrl}/${Endpoints.NOW_PLAYING_MOVIE}`);
  }
}

//*ENDPOINTS *//
class Endpoints {
  static USERS = "users";
  static TRENDING_MOVIE =
    "trending/movie/day?language=en-US&region=IN&page=1&sort_by=popularity.desc";
  static NOW_PLAYING_MOVIE = "movie/now_playing?region=IN&page=1";
  // static NOW_PLAYING_MOVIE =
  //   "discover/movie/day?language=en-US&region=IN&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={2023-06-12}&release_date.lte={2023-05-01}";
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
