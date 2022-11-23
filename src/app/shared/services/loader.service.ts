import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  showSpinner = new BehaviorSubject<boolean>(false);
  constructor() { }
  getSpinner() {
    return this.showSpinner.asObservable();
  }

  setSpinner(value: boolean = false) {
    this.showSpinner.next(value);
  }
}
