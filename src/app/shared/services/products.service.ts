import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRefrenceService } from './api-refrence.service';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httphelper: HttpHelperService, private apiHelper: ApiRefrenceService) { }

  getClients(params?: HttpParams): Observable<any> {
    return this.httphelper.get(this.apiHelper.getProducts, params);
  }

  getProductsDetails(uuid: string, params?: HttpParams): Observable<any> {
    return this.httphelper.get(this.apiHelper.getProductsDetails + '/' + uuid+"/detail", params);
  }
}
