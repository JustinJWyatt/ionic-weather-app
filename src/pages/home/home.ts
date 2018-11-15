import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, 
              private weatherProvider: WeatherProvider,
              private storage: Storage) {

  }

  ionViewWillEnter(){

    this.storage.get('location').then((val) => {

      if(val != null){
        this.location = JSON.parse(val);
      }else{
        this.location = {
          latitude : 42.3601,
          longitude : -71.0589
        };
      }

    });

    this.weatherProvider.getWeather(this.location.latitude, this.location.longitude).subscribe(data => {
        this.weather = data;
    });
  }

}
