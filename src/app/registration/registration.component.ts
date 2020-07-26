import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phonenumber': new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
        'password': new FormControl(null, [Validators.required, Validators.pattern("[a-z,A-Z,0-9,d@$!%*?&]{8,30}")]),
      })
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
