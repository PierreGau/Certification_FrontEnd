import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddMessagesComponent } from './pages/page-add-messages/page-add-messages.component';
import { PageEditMessagesComponent } from './pages/page-edit-messages/page-edit-messages.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';

const routes: Routes = [
  // messages/
  {path: '', component: PageListMessagesComponent},
  // messages/add
  {path: 'add', component: PageAddMessagesComponent},
  // messages/edit
  {path: 'edit', component: PageEditMessagesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
