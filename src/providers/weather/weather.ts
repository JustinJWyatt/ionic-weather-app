import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {

  private apiKey: string = 'some_api_key';

  private url: string;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');

    this.url = 'https://api.darksky.net/forecast/'+ this.apiKey;
  }

  getWeather(latitude: number, longitude: number): Observable<any>{
    return this.http.get(this.url + '/' + latitude + ',' + longitude).map(res => res);
  }

}
