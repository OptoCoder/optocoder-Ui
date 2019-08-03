import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optocoder-navbar',
  templateUrl: './optocoder-navbar.component.html',
  styleUrls: ['./optocoder-navbar.component.css']
})
export class OptocoderNavbarComponent implements OnInit {
  userName: string;

  constructor() { }

  ngOnInit() {
  }
  snavToggle(snav)
  {
    snav.toggle();
  }

}
