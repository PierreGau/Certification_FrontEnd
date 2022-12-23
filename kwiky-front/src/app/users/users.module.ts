import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { PageEditUserComponent } from './pages/page-edit-user/page-edit-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListUsersComponent,
    PageEditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
