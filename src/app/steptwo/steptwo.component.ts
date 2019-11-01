import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-steptwo',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.css']
})
export class SteptwoComponent implements OnInit {
  creditCardList=[];
  inputTrue:boolean = false;
  addresOpen = false;
  @Output() toStepThree = new EventEmitter;
  @Output() toStepOne = new EventEmitter;
  constructor() {}

  ngOnInit() {
  }
  addCardList(){
    this.creditCardList.push(1);
  }
  nextStepThree(){
    this.inputTrue = true;
    // this.toStepThree.emit(false);
  }
  backToStepOne(){
    this.toStepOne.emit(true);
  }
  addAddres(){
    this.addresOpen = true;
  }
}
