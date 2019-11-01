import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepthree',
  templateUrl: './stepthree.component.html',
  styleUrls: ['./stepthree.component.css']
})
export class StepthreeComponent implements OnInit {
  @Output() backStepTwo = new EventEmitter();
  @Output() toStepFour = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  backToStepTwo(){
    this.backStepTwo.emit(true);
  }
  stepFour(){
    this.toStepFour.emit(false);
  }
}
