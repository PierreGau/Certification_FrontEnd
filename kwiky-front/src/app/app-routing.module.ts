import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // localhost:4200 se redirige automatiquement sur /sign-in
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  // Chemin vers le module servers
  {
    path: 'servers',
    loadChildren: () =>
      import('./servers/servers.module').then((m) => m.ServersModule),
  },

  // Chemin vers le module canaux
  {
    path: 'canaux',
    loadChildren: () =>
      import('./canaux/canaux.module').then((m) => m.CanauxModule),
  },

  // Chemin vers le module messages
  {
    path: 'messages',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesModule),
  },

  // Chemin vers le module users
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },


  // Chemin vers le module page-not-found
  // path : '**' => toutes les pages inexistantes affichent le module pagenotfound
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
