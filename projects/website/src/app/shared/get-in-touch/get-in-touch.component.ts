import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '../../core/api/email.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'tt-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {
  @Input() title = 'Get in touch';
  @Input() subtitle =
    'Could you use some expertise and training in your project or organization to enable your team and deliver more value to your end users?';
  @Input()
  call = `Let's get in touch to figure out the best way I can help you to achieve <strong>achieve your goals</strong>!`;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    console.log('called');
    if (this.form.valid) {
      this.emailService.sendEmail(this.form.getRawValue()).subscribe(
        () => {
          this.notificationService.success('Message sent');
          this.resetForm();
        },
        () => {
          this.notificationService.error(
            'Something went wrong, please contact me using @tomastrajan on Twitter'
          );
          this.resetForm();
        }
      );
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
