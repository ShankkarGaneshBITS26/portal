import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    return 'error';
  }
}
