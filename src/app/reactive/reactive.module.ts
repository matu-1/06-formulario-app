import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicoComponent } from './pages/basico/basico.component';
import { DinamicoComponent } from './pages/dinamico/dinamico.component';
import { SwitchComponent } from './pages/switch/switch.component';


@NgModule({
  declarations: [
    BasicoComponent,
    DinamicoComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ReactiveModule { }
