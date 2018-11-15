import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  private apiKey: string = 'some-api-key';

  private url: string;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');

    this.url = 'https://api.darksky.net/forecast/'+ this.apiKey;
  }

  getWeather(latitude: number, longitude: number){
    return this.http.get(this.url + '/' + latitude + ',' + longitude).map(res => res);
  }

}
