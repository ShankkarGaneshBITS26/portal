import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GET, POST, PUT } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  
  httpHeader: HttpHeaders = new HttpHeaders();
  constructor(private _http: HttpClient,) { }

  get(url: string, params?: HttpParams, requiredHeader?: true): Observable<any> {
    const req = new HttpRequest(GET, url, {headers: this.httpHeader, params: params});
    return this._http.request(req);
  }

  put(url: string, data: any, params?: HttpParams, requiredHeader?: true): Observable<any> {
    const req = new HttpRequest(PUT, url, data, {headers: this.httpHeader, params: params});
    return this._http.request(req);
  }

  Post(url: string, typeOfScreen: string, data?: any, httpParams?: HttpParams, Progress?: boolean): Observable<any> {
    const req = new HttpRequest(POST, url, data, {headers: this.httpHeader, params: httpParams, reportProgress : Progress});
    return this._http.request(req);
}
}
