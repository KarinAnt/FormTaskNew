import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-stepthree',
  templateUrl: './stepthree.component.html',
  styleUrls: ['./stepthree.component.css']
})
export class StepthreeComponent implements OnInit {
  @Output() backStepTwo = new EventEmitter();
  @Output() toStepFour = new EventEmitter();
  subscribeLater = this.fb.group({
    subscribe: [''],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]],
    later: ['']
    // conditions: this.fb.array([])
  });
  // get conditions(): FormArray {
  //   return this.subscribeLater.get('conditions') as FormArray;
  // }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  backToStepTwo(){
    this.backStepTwo.emit(true);
  }
  stepFour(){
    this.toStepFour.emit(false);
    // console.log( this.subscribeLater.controls["email"]);
    // this.subscribeLater.controls["email"].setValidators([Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]);
  }
  // addCondition() {
  //   this.conditions.push(this.fb.group({
  //     // title: ['', Validators.required],
  //     radios: ['', Validators.required]
  //   }));
  // }
}
