import http from "./http";
import { GITHUB_API_URL, MOVIE_DB_API_URL } from "@env";

let baseUrl = GITHUB_API_URL;
// let baseUrl = MOVIE_DB_API_URL;

export class ApiNetworkService {
  static getGithubUsers() {
    return http.get(`${baseUrl}/${Endpoints.USERS}`);
    // return http.get(`${baseUrl}/${Endpoints.TRENDING_MOVIE}`);
  }
}

//*ENDPOINTS *//
class Endpoints {
  static USERS = "users";
  static TRENDING_MOVIE =
    "trending/movie/day?language=en-US&region=IN&page=1&sort_by=popularity.desc";
  static NOW_PLAYING_MOVIE =
    "discover/movie/day?language=hi&region=IN&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={2023-08-12}&release_date.lte={2023-05-01}";
}
