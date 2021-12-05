import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [],
})
export class SwitchComponent implements OnInit {
  persona = {
    genero: 'F',
    hasNotificaciones: true,
  };
  hasTerminos = false;

  constructor() {}

  ngOnInit(): void {}
}
