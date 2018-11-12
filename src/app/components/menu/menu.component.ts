import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show_menu = false;
  w: number;

  constructor() {

  }

  ngOnInit() {
    if (window.innerWidth >= 768) {
      this.show_menu = false;
      console.log('ancho', this.w);
    } else {
      this.show_menu = true;
      console.log('ancho2', this.w);

    }
  }

  show_menu_function() {
    this.show_menu = false;


  }


  show_menu_function2(event) {
    console.log(event.target);

    this.show_menu = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
     this.w = window.innerWidth;
    if (this.w >= 768) {
      this.show_menu = false;
      console.log('ancho', this.w);
    } else {
      this.show_menu = true;
      console.log('ancho2', this.w);

    }
  }


}
