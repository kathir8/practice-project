import { Routes } from '@angular/router';

/**
 * =============================================================================
 * APPLICATION ROUTES WITH LAZY LOADING
 * =============================================================================
 * 
 * This file demonstrates various lazy loading techniques in Angular:
 * 
 * 1. COMPONENT LAZY LOADING (loadComponent)
 *    - Components are loaded on-demand when route is accessed
 *    - Reduces initial bundle size
 *    - Example: Dashboard, Profile, About
 * 
 * 2. CHILD ROUTES LAZY LOADING (loadChildren)
 *    - Parent component loads first
 *    - Child routes are also lazy loaded separately
 *    - Example: Settings module with child routes
 * 
 * 3. ROUTE GUARDS (canActivate)
 *    - Guards execute before component loads
 *    - Prevents loading component for unauthorized users
 *    - Import: import { authGuard, adminGuard } from './core/guards';
 *    - Usage: canActivate: [authGuard]
 * 
 * HOW IT WORKS:
 * - Each route with loadComponent creates a separate JavaScript chunk
 * - Chunks are downloaded only when user navigates to that route
 * - Angular's router handles dynamic imports automatically
 * - Browser caches chunks after first load
 * 
 * PERFORMANCE BENEFITS:
 * - Faster initial page load (smaller main bundle)
 * - Better Time to Interactive (TTI)
 * - Reduced bandwidth usage
 * - Improved Core Web Vitals scores
 * 
 * TO SEE IT IN ACTION:
 * 1. Open browser DevTools (F12)
 * 2. Go to Network tab
 * 3. Click different navigation links
 * 4. Watch separate chunk files being downloaded
 * =============================================================================
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard),
    title: 'Dashboard'
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then(m => m.Profile),
    title: 'Profile'
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then(m => m.About),
    title: 'About'
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings').then(m => m.Settings),
    loadChildren: () => import('./settings/settings.routes').then(m => m.SETTINGS_ROUTES),
    title: 'Settings'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
