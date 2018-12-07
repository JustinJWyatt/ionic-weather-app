import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public weather: any;
  public city: string;

  constructor(public navCtrl: NavController, public weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){
    this.city = "London";
    this.weatherProvider.getWeather(this.city).subscribe(weather => {
      this.weather = weather;
    });
  }
}
