import { Routes } from '@angular/router';

/**
 * Settings child routes - lazy loaded
 */
export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full'
  },
  {
    path: 'general',
    loadComponent: () => import('./general/general').then(m => m.General)
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account').then(m => m.Account)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./privacy/privacy').then(m => m.Privacy)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications').then(m => m.Notifications)
  }
];
