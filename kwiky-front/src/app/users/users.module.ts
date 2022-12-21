import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { PageAddUsersComponent } from './pages/page-add-users/page-add-users.component';
import { PageEditUsersComponent } from './pages/page-edit-users/page-edit-users.component';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageEditUserComponent } from './pages/page-edit-user/page-edit-user.component';


@NgModule({
  declarations: [
    PageListUsersComponent,
    PageAddUsersComponent,
    PageEditUsersComponent,
    PageAddUserComponent,
    PageEditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
