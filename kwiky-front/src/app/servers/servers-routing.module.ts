import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddServerComponent } from './pages/page-add-server/page-add-server.component';
import { PageEditServerComponent } from './pages/page-edit-server/page-edit-server.component';
import { PageListServersComponent } from './pages/page-list-servers/page-list-servers.component';

const routes: Routes = [
    // servers/
    {path: '', component: PageListServersComponent},
    // servers/add
    {path: 'add', component: PageAddServerComponent},
    // servers/edit
    {path: 'edit', component: PageEditServerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
