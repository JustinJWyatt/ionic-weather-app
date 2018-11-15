import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: string;
  location: {
    longitude: number,
    latitude: number
  };

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){
    this.location = {
      latitude : 42.3601,
      longitude : -71.0589
    };

    this.weatherProvider.getWeather(this.location.latitude, this.location.longitude).subscribe(data => {
        this.weather = data;
    });
  }

}
