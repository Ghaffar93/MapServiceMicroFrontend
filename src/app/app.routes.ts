import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'map-service',
    loadComponent: () => import('MapServiceMicroFrontend/Component').then(m => m.DemoMaterialComponent)
  },
  {
    path: 'reporting-service',
    loadComponent: () => import('ReportingServiceMicroFrontend/Component').then(m => m.DemoMaterialComponent)
  },
  { path: '', redirectTo: '/map-service', pathMatch: 'full' }
];