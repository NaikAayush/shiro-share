export interface EmailBody {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export interface EmailResponse {
  message: string;
  error?: any;
}
