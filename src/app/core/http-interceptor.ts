import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, tap, throwError } from 'rxjs';

/**
 * HTTP Interceptor for handling all HTTP requests and responses
 * Features:
 * - Request/Response logging
 * - Authentication token injection
 * - Error handling
 * - Loading state management
 */
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = Date.now();

  // Clone the request to add custom headers
  let modifiedReq = req.clone({
    setHeaders: {
      'X-Request-ID': generateRequestId(),
    },
  });

  // Add authentication token if available
  const token = getAuthToken();
  if (token) {
    modifiedReq = modifiedReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  console.log(`[HTTP] ${modifiedReq.method} ${modifiedReq.url}`, {
    headers: modifiedReq.headers.keys(),
    body: modifiedReq.body,
  });

  return next(modifiedReq).pipe(
    tap((event) => {
      // Log successful responses
      if (event.type === 4) { // HttpEventType.Response
        const duration = Date.now() - startTime;
        console.log(`[HTTP] ${modifiedReq.method} ${modifiedReq.url} - Success (${duration}ms)`, event);
      }
    }),
    catchError((error: HttpErrorResponse) => {
      const duration = Date.now() - startTime;
      console.error(`[HTTP] ${modifiedReq.method} ${modifiedReq.url} - Error (${duration}ms)`, {
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        error: error.error,
      });

      // Handle specific error cases
      switch (error.status) {
        case 401:
          handleUnauthorized();
          break;
        case 403:
          handleForbidden();
          break;
        case 404:
          handleNotFound(modifiedReq.url);
          break;
        case 500:
          handleServerError();
          break;
        case 0:
          handleNetworkError();
          break;
      }

      return throwError(() => error);
    }),
    finalize(() => {
      // Cleanup or final operations
      const duration = Date.now() - startTime;
      console.log(`[HTTP] Request completed in ${duration}ms`);
    })
  );
};

/**
 * Authentication interceptor specifically for token management
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Skip token for public endpoints
  const publicEndpoints = ['/auth/login', '/auth/register', '/public'];
  const isPublicEndpoint = publicEndpoints.some(endpoint => req.url.includes(endpoint));

  if (isPublicEndpoint) {
    return next(req);
  }

  const token = getAuthToken();
  if (!token) {
    console.warn('[Auth] No token available for protected endpoint:', req.url);
    return next(req);
  }

  const authenticatedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authenticatedReq);
};

/**
 * Error handling interceptor with retry logic
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred';

      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Client Error: ${error.error.message}`;
      } else {
        // Server-side error
        errorMessage = `Server Error: ${error.status} - ${error.message}`;
      }

      // You can show user-friendly notifications here
      console.error('[Error Interceptor]', errorMessage);

      return throwError(() => new Error(errorMessage));
    })
  );
};

/**
 * Loading state interceptor
 */
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  // Implement loading state management
  // You can inject a LoadingService here if needed
  showLoading();

  return next(req).pipe(
    finalize(() => {
      hideLoading();
    })
  );
};

// Helper functions

function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function getAuthToken(): string | null {
  // Retrieve token from localStorage, sessionStorage, or a service
  return localStorage.getItem('auth_token');
}

function handleUnauthorized(): void {
  console.error('[Auth] Unauthorized access - redirecting to login');
  // Implement redirect to login or token refresh logic
  // Example: router.navigate(['/login']);
  localStorage.removeItem('auth_token');
}

function handleForbidden(): void {
  console.error('[Auth] Access forbidden - insufficient permissions');
  // Show error message to user
}

function handleNotFound(url: string): void {
  console.error(`[HTTP] Resource not found: ${url}`);
  // Show 404 message to user
}

function handleServerError(): void {
  console.error('[HTTP] Internal server error - please try again later');
  // Show error message to user
}

function handleNetworkError(): void {
  console.error('[HTTP] Network error - please check your connection');
  // Show network error message to user
}

function showLoading(): void {
  // Implement loading indicator logic
  // Example: loadingService.show();
}

function hideLoading(): void {
  // Implement loading indicator logic
  // Example: loadingService.hide();
}
