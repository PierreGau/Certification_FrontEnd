import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { PageListServersComponent } from './pages/page-list-servers/page-list-servers.component';
import { PageAddServerComponent } from './pages/page-add-server/page-add-server.component';
import { PageEditServerComponent } from './pages/page-edit-server/page-edit-server.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListServersComponent,
    PageAddServerComponent,
    PageEditServerComponent
  ],
  imports: [
    CommonModule,
    ServersRoutingModule,
    SharedModule
  ]
})
export class ServersModule { }
