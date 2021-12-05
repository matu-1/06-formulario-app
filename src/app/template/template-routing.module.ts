import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './pages/basico/basico.component';
import { DinamicoComponent } from './pages/dinamico/dinamico.component';
import { SwitchComponent } from './pages/switch/switch.component';

const routes: Routes = [
  {
    path: 'basico',
    component: BasicoComponent,
  },
  {
    path: 'dinamico',
    component: DinamicoComponent,
  },
  {
    path: 'switch',
    component: SwitchComponent,
  },
  {
    path: '**',
    redirectTo: 'basico',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
