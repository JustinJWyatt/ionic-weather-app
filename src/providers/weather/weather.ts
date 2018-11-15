import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {

  private apiKey: string = '786c83b86e5707c2f43374d466e94a2c';

  private url: string;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');

    this.url = 'https://api.darksky.net/forecast/'+ this.apiKey;
  }

  getWeather(latitude: number, longitude: number): Observable<any>{
    return this.http.get(this.url + '/' + latitude + ',' + longitude).map(res => res);
  }

}
