import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker } from "leaflet"
import { Geolocation } from "@ionic-native/geolocation/ngx"

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map: Map;
  lat_ac:number;
  long_ac:number;

  constructor(private geolocation: Geolocation) {
    this.obtenerUbicacionActual();
  }
  
  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Map('mapId2').setView([this.lat_ac, this.long_ac], 13);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

    const markPoint = marker([this.lat_ac, this.long_ac]);
    markPoint.bindPopup("<p>'{{registrationForm.nombre}}'</p>");
    this.map.addLayer(markPoint);
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  obtenerUbicacionActual(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.lat_ac=data.coords.latitude
      this.long_ac=data.coords.longitude
     });
  }
  ngOnInit() {
  }

}
