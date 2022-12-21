import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanauxRoutingModule } from './canaux-routing.module';
import { PageListCanauxComponent } from './pages/page-list-canaux/page-list-canaux.component';
import { PageAddCanauxComponent } from './pages/page-add-canaux/page-add-canaux.component';
import { PageEditCanauxComponent } from './pages/page-edit-canaux/page-edit-canaux.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListCanauxComponent,
    PageAddCanauxComponent,
    PageEditCanauxComponent
  ],
  imports: [
    CommonModule,
    CanauxRoutingModule,
    SharedModule
  ]
})
export class CanauxModule { }
