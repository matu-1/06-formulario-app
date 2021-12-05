import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicoComponent } from './pages/basico/basico.component';
import { DinamicoComponent } from './pages/dinamico/dinamico.component';
import { SwitchComponent } from './pages/switch/switch.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicoComponent,
    DinamicoComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
  ]
})
export class TemplateModule { }
