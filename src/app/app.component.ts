import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    window.onscroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (window.scrollY > 50) {
        navbar.classList.add('dark-bg');
      } else {
        navbar.classList.remove('dark-bg');
      }
    };
  }
}
