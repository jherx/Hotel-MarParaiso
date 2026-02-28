import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {
  step = 1;
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      dates: this.fb.group({
        checkIn: ['', Validators.required],
        checkOut: ['', Validators.required]
      }),
      room: this.fb.group({
        type: ['', Validators.required],
        guests: [1, Validators.required]
      }),
      guest: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      })
    });
  }

  next(): void {
    if (this.step < 4) this.step++;
  }

  back(): void {
    if (this.step > 1) this.step--;
  }

  roomPrices: any = {
    family: 180,
    premium: 250,
    standard: 120
  };

  calculateNights(): number {
    const checkIn = new Date(this.reservationForm.get('dates.checkIn')?.value);
    const checkOut = new Date(this.reservationForm.get('dates.checkOut')?.value);

    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);

    return diffDays > 0 ? diffDays : 0;
  }

  calculateTotal(): number {
    const roomType = this.reservationForm.get('room.type')?.value;
    const nights = this.calculateNights();
    return nights * (this.roomPrices[roomType] || 0);
  }

  async processPayment() {
    const total = this.calculateTotal();

    const response = await fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: total * 100 })
    });

    const { clientSecret } = await response.json();

    console.log('Payment Intent created:', clientSecret);
  }

  submit(): void {
    console.log(this.reservationForm.value);
  }
}
