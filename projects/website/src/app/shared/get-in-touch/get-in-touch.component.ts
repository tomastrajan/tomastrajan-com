import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '../../core/api/email.service';

@Component({
  selector: 'tt-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    console.log('called');
    if (this.form.valid) {
      this.emailService.sendEmail(this.form.getRawValue()).subscribe();
    }
  }

  resetForm() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }
}
