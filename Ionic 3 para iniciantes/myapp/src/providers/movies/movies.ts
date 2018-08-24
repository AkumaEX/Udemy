import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private api_key = "f6477579fbda5a4456056e62b6987944";

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=" + this.api_key);
  }

  getPopular() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.api_key)
  }
}
