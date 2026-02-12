import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor, authInterceptor, errorInterceptor, loadingInterceptor } from './core/http-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        loadingInterceptor,    // Shows loading indicator
        authInterceptor,       // Handles authentication
        httpInterceptor,       // Logs and tracks requests
        errorInterceptor       // Handles errors
      ])
    )
  ]
};
