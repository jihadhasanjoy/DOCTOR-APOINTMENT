import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RefreshPageComponent } from './components/refresh-page/refresh-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'month', pathMatch: 'full' },
      { path: 'month', component: MainContentComponent },
      { path: 'month/:id', component: MainContentComponent },
      { path: 'refresh', component: RefreshPageComponent, pathMatch: 'full' },
    ],
  },
];

export const AppLayoutRoutes = RouterModule.forChild(routes);
