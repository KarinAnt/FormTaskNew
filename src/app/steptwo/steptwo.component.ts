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
  errorToStepThree = false;
  add = 0;
  @Output() toStepThree = new EventEmitter;
  @Output() toStepOne = new EventEmitter;
  constructor() {}

  ngOnInit() {
  }
  addCardList(){
    this.add++;
    if(this.creditCardList.length<3){
      this.creditCardList.push(1);
    }else{
      return ;
    }
  }
  nextStepThree(){
      this.inputTrue = true;
      console.log(this.errorToStepThree);
    // if(this.errorToStepThree){
    //   this.toStepThree.emit(false);
    // }
    // if(this.add > 1){
      this.toStepThree.emit(false);
    // }
  }
  backToStepOne(){
    this.toStepOne.emit(true);
  }
  addAddres(){
    this.addresOpen = true;
    this.add++;
  }
  noNextThree(event){
    console.log(event, '1');
    this.errorToStepThree = event;
    console.log(event, '2');
  }
}
