import { inject, Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeSerivce {

  private readonly http = inject(ApiService);
  getProductsData(){
    return this.http.getData('products');
  }
}
