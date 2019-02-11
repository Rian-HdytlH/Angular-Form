import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;

  userModel = new User('', '', 12345, 'default', 'morning', true);

  constructor(private _enrollmentService : EnrollmentService) {}

  validateTopic(value) {
    if (value === 'default'){
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Succes!', data),
        error => console.error('Error!', error)
      )
  } 

}
