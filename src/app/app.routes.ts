import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'insurance',
      loadComponent: () => import('./insurance-form/insurance-form.component')
        .then(m => m.InsuranceFormComponent)
    },
    {
      path: 'home',
      loadComponent: () => import('./home-page/home-page.component')
        .then(m => m.HomePageComponent)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ];
