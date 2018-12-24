import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';
import { NgForm } from '@angular/forms';
import { Hotel } from '../../../moduls/hotel';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
  providers: [HotelService]
})
export class RegistrosComponent implements OnInit {

  constructor(private hotelservice: HotelService) { }

  ngOnInit() {
    this.getDatos();
  }

  addHotel(form?: NgForm) {
     console.log(form.value);
    if (form.value._id) {
      this.hotelservice.postDatos(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getDatos();
        });
    } else {
      this.hotelservice.postDatos(form.value)
        .subscribe(res => {
          this.getDatos();
          this.resetForm(form);

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
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.hotelservice.selecion_hotel = new Hotel();
    }
  }
}
