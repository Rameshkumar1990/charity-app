import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Router } from '@angular/router';

import { Personal } from '../../../service/signup.model';
import { SignupDataService } from '../../../service/signup-data.service';

@Component({
  selector: 'signup-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  private title = 'Please tell about yourself';
  private personal: Personal;
  private form: any;
  @Output()
  private personalCompleted: EventEmitter<any> = new EventEmitter<any>();

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

  goToPrevious(form: any) {
    if (this.save(form)) {
      this.personalCompleted.emit({ 'completed': 'personal', 'show': 'user' });
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.personalCompleted.emit({ 'completed': 'personal', 'show': 'work' });
    }
  }
}
