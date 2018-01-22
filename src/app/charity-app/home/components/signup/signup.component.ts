import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SignupDataService } from '../../service/signup-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input()
  private formData;
  constructor(private signupDataService:SignupDataService) { }

  ngOnInit() {
    this.formData = this.signupDataService.getFormData();
  }
}