import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormTask';
  stepOneArray = {userName: "", email: "", password: "", confirmPassword: ""};
  cardObject = {cardNumber: "", owner: "", cw: "", expiration: ""};
  addresObject = {city: "", stretName: "", appartment: ""};
  toStepTwo = true;
  toStepThree = true;
  toStepFour = true;
  cardListOutput = 0;
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
  stepOneObject(event){
    this.stepOneArray = event;
  }
  cardObjectFun(event){
    this.cardObject = event;
  }
  addresObjectFun(event){
    this.addresObject = event;
  }
  cardListOutputFun(event){
    this.cardListOutput =event;
  }
}
