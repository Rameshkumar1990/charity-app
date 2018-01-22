import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupDataService } from '../../../service/signup-data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  private title = 'What do you do?';
  private workType: string;
  private form: any;
  
  constructor(private router: Router, private signupDataService: SignupDataService) {
  }

  ngOnInit() {
      this.workType = this.signupDataService.getWork();
      console.log('Work feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      
      this.signupDataService.setWork(this.workType);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the personal page
          this.router.navigate(['/join/personal']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the address page
          this.router.navigate(['/join/address']);
      }
  }
}
