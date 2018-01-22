import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Router } from '@angular/router';

import { Personal } from '../../../service/signup.model';
import { SignupDataService } from '../../../service/signup-data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  private title = 'Please tell about yourself';
  private personal: Personal;
  private form: any;

  constructor(private router: Router, private signupDataService: SignupDataService) { }

  ngOnInit() {
    this.personal = this.signupDataService.getPersonal();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.signupDataService.setPersonal(this.personal);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/join/work']);
    }
  }
}
