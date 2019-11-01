import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormTask';
  toStepTwo = true;
  toStepThree = true;
  toStepFour = true;
  nextStepTwo(event){
    this.toStepTwo= event;
  }
  nextStepThree(event){
    this.toStepThree =event;
  }
  backToStepTwo(event){
    this.toStepThree = event;
  }
  subStepFour(event){
    this.toStepFour=event;
  }
}
