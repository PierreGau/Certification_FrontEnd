import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageEditMessagesComponent } from './pages/page-edit-messages/page-edit-messages.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageEditMessagesComponent,
    PageListMessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ]
})
export class MessagesModule { }
