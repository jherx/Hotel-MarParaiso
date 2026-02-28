import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  rooms = [
    {
      title: 'rooms.family.title',
      description: 'rooms.family.desc',
      image: '/assets/images/room-family.jpg'
    },
    {
      title: 'rooms.premium.title',
      description: 'rooms.premium.desc',
      image: '/assets/images/room-premium.jpg'
    },
    {
      title: 'rooms.standard.title',
      description: 'rooms.standard.desc',
      image: '/assets/images/room-standard.jpg'
    }
  ];

  services = [
    { icon: '🏊', label: 'services.pool' },
    { icon: '👶', label: 'services.kids' },
    { icon: '🍳', label: 'services.breakfast' },
    { icon: '🌊', label: 'services.beach' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
