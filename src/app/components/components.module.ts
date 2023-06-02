import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
