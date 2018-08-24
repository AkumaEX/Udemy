import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private config = {
    show_slide: true
  }

  constructor(public http: HttpClient) {
    console.log('Hello ConfigProvider Provider');
  }

  getConfigData(): any {
    return localStorage.getItem("config");
  }

  setConfigData(show_slide: boolean) {
    this.config.show_slide = show_slide;
    localStorage.setItem("config", JSON.stringify(this.config));
  }
}
