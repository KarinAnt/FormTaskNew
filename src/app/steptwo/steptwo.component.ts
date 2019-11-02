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
  errorToStepThreeAdd = false;
  add = 0;
  cardArray = [];
  addresArray=[];
  @Output() toStepThree = new EventEmitter;
  @Output() toStepOne = new EventEmitter;
  @Output() cardObject = new EventEmitter;
  @Output() addresObject = new EventEmitter;
  @Input() backCardArray: object;
  @Input() backAddresArray: object;
  @Output() cardListOutput = new EventEmitter();
  @Input() cardListInput: number;
  constructor() {}

  ngOnInit() {
    for(let i = 0; i< this.cardListInput; i++){
      this.creditCardList.push(1);
    }
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
    // if(this.errorToStepThree && this.add > 1 && this.errorToStepThreeAdd){
      this.toStepThree.emit(false);
      this.cardObject.emit(this.cardArray);
      this.addresObject.emit(this.addresArray);
      this.cardListOutput.emit(this.creditCardList.length);
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
    this.errorToStepThree = event;
  }
  noNextThreeAdd(event){
    this.errorToStepThreeAdd = event;
  }
  cardArrayFun(event){
    this.cardArray=event;
  }
  addresArrayFun(event){
    this.addresArray=event;
  }
}
