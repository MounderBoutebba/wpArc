import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  languageSource = new BehaviorSubject<string>("FRA");
  currentLanguage = this.languageSource.asObservable();
  constructor() { }

  changeLanguage(lng: string) {
    this.languageSource.next(lng);
  }
}
