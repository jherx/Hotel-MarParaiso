import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';
import {NgForm} from '@angular/forms';
import { Hotel } from '../../../moduls/hotel';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ HotelService ]
})
export class ContactoComponent implements OnInit {

  constructor(private hotelservice: HotelService) { }

  ngOnInit() {
  }
  addHotel(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
  this.hotelservice.putDatos(form.value)
  .subscribe(res => {
    this.resetForm(form);
   this.getDatos();
    });
  }
  }
  getDatos() {
  this.hotelservice.getDatos()
  .subscribe(res => {
  this.hotelservice.datos = res as Hotel[];
  });
  }

  putDatos(editt: Hotel) {
      this.hotelservice.selecion_hotel = editt;
    }
    eliminaDatos(_id: string, form: NgForm) {
      if (confirm('¿Esta seguro que desea eliminarlo?')) {
        this.hotelservice.eliminaDatos(_id)
          .subscribe(res => {
            this.getDatos();
            this.resetForm(form);

          });
     }
  }
  resetForm(form ?: NgForm) {
      if (form) {
        form.reset();
        this.hotelservice.selecion_hotel = new Hotel();
      }
    }
}
