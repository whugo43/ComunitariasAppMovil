import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, Popup, Marker } from "leaflet"
import { Geolocation } from "@ionic-native/geolocation/ngx"
import { ActivatedRoute, Router } from "@angular/router"
import { CentroAcopioClass } from '../../clases/centro-acopio/centro-acopio-class'
import { CentroAcopioService } from '../../services/centro-acopio/centro-acopio.service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map: Map;
  public lat_ac: number = 0;
  public long_ac: number = 0;
  public nombre: string = '';
  public direccion: string = '';
  public lat_pa: number;
  public lng_pa: number;
  public centroAcopio_save: CentroAcopioClass = new CentroAcopioClass();
  public band: number = 0;
  public markPoint: Marker;

  public lat_enviar: number = 0;
  public lng_enviar: number = 0;
  formData = new FormData();
  private accionEditar: number = 0;
  private centroAcopioId: any;

  constructor(public geolocation: Geolocation,
    public activateRoute: ActivatedRoute, public route: Router, private conexionApi: CentroAcopioService, private formBuilder:
      FormBuilder) {
    this.obtenerUbicacionActual();
    this.recibiendoDatos();
  }

  public recibiendoDatos() {
    this.activateRoute.queryParamMap.subscribe((data) => {
      this.nombre = data.get('nombre');
      this.direccion = data.get('direccion');
      if (data.get('accionEditar') == "1") {
        this.accionEditar = 1;
        this.centroAcopioId = data.get('id');
        console.log('Entro en editar');
      }
    })

  }

  public enviarDatos() {
    this.formData.append('name', this.nombre);
    this.formData.append('address', this.direccion);
    this.formData.append('latitude', this.lat_enviar.toString());
    this.formData.append('longitude', this.lng_enviar.toString());
    this.formData.append('createdBy', 'mi');

    if (this.accionEditar > 0) {
      this.conexionApi.updateCentroAcopio(this.formData, this.centroAcopioId).subscribe((newTask) => {
        { console.log(newTask) }
      });
      this.accionEditar = 1;

    } else {
      this.conexionApi.guardarCentroAcopio(this.formData).subscribe(
        (newTask) => { console.log(newTask); }
      );
    }

    this.route.navigate(['../centro-acopio']);
  }

  check_ubicacion() {
    return this.lng_enviar + this.lat_enviar == 0;
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    if (this.accionEditar > 0) {
      this.conexionApi.getCentroAcopioId(this.centroAcopioId).subscribe(data => {
        this.lat_ac = data['latitude'];
        this.long_ac = data['longitude'];
      });

    }
    this.map = new Map('mapId2').setView([this.lat_ac, this.long_ac], 16);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);
    if (this.accionEditar > 0) {
      this.conexionApi.getCentroAcopioId(this.centroAcopioId).subscribe(data => {
        this.markPoint = marker([data['latitude'], data['longitude']]);
        this.markPoint.bindPopup("<p>" + "<b>Nombre: </b>" + data['name'] + "</p>");

        this.map.addLayer(this.markPoint);
        this.lat_enviar=data['latitude'];
        this.lng_enviar=data['longitude'];
        this.map.setView([data['latitude'], data['longitude']], 19);
        this.band = 1;
      });

    }
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

  /*Esta funcion solo añadira un marcador*/
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
    this.lat_enviar = e.latlng.lat;
    this.lng_enviar = e.latlng.lng;
  }

  ngOnInit() {
  }

}
