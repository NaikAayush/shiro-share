import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  isToastVisible: boolean = false;
  fileURL: string = '';

  success: boolean = false;
  toastTitle: string = '';
  toastBody: string = '';
  constructor() {}
}
