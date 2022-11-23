import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRefrenceService {
  baseUrl = environment.baseUrl;
  constructor() { }

  getProducts = this.baseUrl + 'client';
  getProductsDetails = this.baseUrl + 'product-catalog';
}
