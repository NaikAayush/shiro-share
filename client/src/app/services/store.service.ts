import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  isToastVisible: boolean = false;
  constructor() {}
}
