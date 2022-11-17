import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  emailForm = new FormGroup({
    from: new FormControl('', [Validators.email, Validators.required]),
    to: new FormControl('', [Validators.email, Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  timeNow: string;
  tooltip_status = 0;

  constructor() {
    const d = new Date();
    d.setHours(d.getHours() + 24);
    this.timeNow = `${d.toLocaleDateString()} ${d.getHours()}:00`;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.emailForm.value);
  }

  get from() {
    return this.emailForm.get('from');
  }
  get to() {
    return this.emailForm.get('to');
  }
  get subject() {
    return this.emailForm.get('subject');
  }
  get message() {
    return this.emailForm.get('message');
  }
}
