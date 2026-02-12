import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Example API Service demonstrating HTTP interceptor usage
 * All requests will automatically pass through the configured interceptors
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  /**
   * Example GET request
   */
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  /**
   * Example POST request with data
   */
  createData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data`, data);
  }

  /**
   * Example PUT request
   */
  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/data/${id}`, data);
  }

  /**
   * Example DELETE request
   */
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/data/${id}`);
  }

  /**
   * Public endpoint example (will skip auth interceptor)
   */
  getPublicData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/public/data`);
  }

  /**
   * Login example (will skip auth interceptor)
   */
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
