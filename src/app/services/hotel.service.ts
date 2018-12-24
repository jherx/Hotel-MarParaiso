import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hotel} from '../moduls/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

selecion_hotel: Hotel;
datos: Hotel[];
readonly URL_API = 'http://localhost:3000/HotelMarParaiso';

  constructor(private http: HttpClient) {
    this.selecion_hotel = new Hotel();
   }


postDatos(datos: Hotel) {
    return this.http.post(this.URL_API , datos);
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
