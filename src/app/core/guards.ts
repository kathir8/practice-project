import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

/**
 * Auth Guard for protecting routes
 * Example of using guards with lazy loading
 */
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Check if user is authenticated (example: check localStorage)
  const isAuthenticated = !!localStorage.getItem('auth_token');
  
  if (!isAuthenticated) {
    console.warn('Access denied - redirecting to home');
    router.navigate(['/home']);
    return false;
  }
  
  return true;
};

/**
 * Admin Guard for protecting admin routes
 */
export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Check if user is admin (example logic)
  const userRole = localStorage.getItem('user_role');
  
  if (userRole !== 'admin') {
    console.warn('Admin access required - redirecting to home');
    router.navigate(['/home']);
    return false;
  }
  
  return true;
};

/**
 * Can Deactivate Guard
 * Prevents navigation if there are unsaved changes
 */
export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export const canDeactivateGuard: CanActivateFn = (component: any) => {
  if (component.canDeactivate) {
    return component.canDeactivate() 
      ? true 
      : confirm('You have unsaved changes. Do you want to leave?');
  }
  return true;
};
