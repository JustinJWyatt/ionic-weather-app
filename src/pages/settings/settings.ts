import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  latitude: number;
  longitude: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private storage: Storage) {

    this.storage.get('location').then((val) => {
      if(val){
        let location = JSON.parse(val);
        this.latitude = location.latitude;
        this.longitude = location.longitude;
      }else{
        this.latitude = 42.3601;
        this.longitude = -71.0589
      }
    })

  }

  saveForm(){
    let location = {
      latitude: this.latitude,
      longitude: this.longitude
    };

    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
