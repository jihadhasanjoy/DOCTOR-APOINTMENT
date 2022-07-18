import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exception',
    loadChildren: () =>
      import('./modules/exception-layout/exception.module').then(
        (m) => m.ExceptionModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/app-layout/app-layout.module').then(
        (m) => m.AppLayoutModule
      ),
  },
  {
    path: '**',
    redirectTo: 'exception/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
