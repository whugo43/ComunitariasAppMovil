import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, Popup, Marker } from "leaflet"
import { Geolocation } from "@ionic-native/geolocation/ngx"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map: Map;
  public lat_ac: number=0;
  public long_ac: number=0;
  public nombre: string = '';
  direccion: string = '';
  public lat_pa: number;
  public lng_pa: number;

  public band: number = 0;
  public markPoint: Marker;

  public lat_enviar:number=0;
  public lng_enviar:number=0;

  constructor(public geolocation: Geolocation,
    public activateRoute: ActivatedRoute, public route: Router) {
    this.obtenerUbicacionActual();
    this.recibiendoDatos();

  }

  public recibiendoDatos() {
    this.activateRoute.queryParamMap.subscribe((data) => {
      this.nombre = data.get('nombre');
      this.direccion = data.get('direccion');
    })

  }
  
  public enviarDatos() {
    this.route.navigate(['../centro-acopio'], {
      queryParams: {
        nombre: this.nombre,
        direccion: this.direccion,
        latitud: this.lat_enviar,
        longitud: this.lng_enviar,
      }
    });
  }

  check_ubicacion() {
    return this.lng_enviar + this.lat_enviar ==0;
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Map('mapId2').setView([this.lat_ac, this.long_ac], 13);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);
    this.map.on('click', (e) => { this.addMarker(e) });
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  obtenerUbicacionActual() {
    this.geolocation.getCurrentPosition().then((geo) => {
      this.lat_ac = geo.coords.latitude;
      this.long_ac = geo.coords.longitude;
    })
  }

  addMarker(e: any) {

    if (this.band == 0) {
      this.lat_pa = e.latlng.lat;
      this.lng_pa = e.latlng.lng;
     
      this.band = 1;
    } else if (this.band == 1) {
    
      this.map.removeLayer(this.markPoint);

      this.band = 2;
    } else if (this.band == 2) {
      this.map.removeLayer(this.markPoint);

      this.band = 1;
    }
    this.markPoint = marker([e.latlng.lat, e.latlng.lng]);
    this.markPoint.bindPopup("<p>" + "<b>Nombre: </b>" + this.nombre + "</p>");

    this.map.addLayer(this.markPoint);
    this.map.setView([e.latlng.lat, e.latlng.lng], 19);

    /*Añadiendo las coordenadas de latitud y longuitud para ser enviadas*/
    this.lat_enviar=e.latlng.lat;
    this.lng_enviar=e.latlng.lng;
  }

  ngOnInit() {
  }

}
