import { apiKey } from './../../../environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  private url: string = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(city: string){
    return this.http.get(this.url + '&q=' + city).map(res => res);
  }

}
