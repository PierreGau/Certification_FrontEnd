import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddCanauxComponent } from './pages/page-add-canaux/page-add-canaux.component';
import { PageEditCanauxComponent } from './pages/page-edit-canaux/page-edit-canaux.component';
import { PageListCanauxComponent } from './pages/page-list-canaux/page-list-canaux.component';

const routes: Routes = [
    // canaux/
    {path: '', component: PageListCanauxComponent},
    // canaux/add
    {path: 'add', component: PageAddCanauxComponent},
    // canaux/edit
    {path: 'edit', component: PageEditCanauxComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanauxRoutingModule { }
