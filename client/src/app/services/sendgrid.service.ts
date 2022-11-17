import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailBody, EmailResponse } from '../models/email';

@Injectable({
  providedIn: 'root',
})
export class SendgridService {
  constructor(private http: HttpClient) {}

  async sendEmail(data: EmailBody) {
    await lastValueFrom(
      this.http.post<EmailResponse>(environment.SHIRO_STORE_API, data)
    );
  }
}
