import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  selecion_hotel: Hotel;
  datos: Hotel[];
  readonly URL_API = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.selecion_hotel = new Hotel();
  }


  postDatos(datos: Hotel) {
    return this.http.post(this.URL_API, datos);
  }
  getDatos() {
    return this.http.get(this.URL_API);

  }
  putDatos(datos: Hotel) {
    return this.http.put(this.URL_API + `/${datos._id}`, datos);
  }

  eliminaDatos(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }



}
