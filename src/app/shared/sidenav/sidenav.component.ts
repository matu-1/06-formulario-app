import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
  ]
})
export class SidenavComponent implements OnInit {
  templateMenu: MenuItem[] = [
    {
      label: 'Basico',
      path: 'template/basico'
    },
    {
      label: 'Dinamico',
      path: 'template/dinamico'
    },
    {
      label: 'Switch',
      path: 'template/switch'
    },
  ];
  templateReactive: MenuItem[] = [
    {
      label: 'Basico',
      path: 'reactive/basico'
    },
    {
      label: 'Dinamico',
      path: 'reactive/dinamico'
    },
    {
      label: 'Switch',
      path: 'reactive/switch'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
