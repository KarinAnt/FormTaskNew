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
    subscribe: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]]
    // later: ['']
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  backToStepTwo(){
    this.backStepTwo.emit(true);
  }
  stepFour(){
    this.subscribeLater.valueChanges.subscribe( values => console.log(values));
    this.toStepFour.emit(false);
    // console.log( this.subscribeLater.controls["email"]);
    // this.subscribeLater.controls["email"].setValidators([Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]);
  }
  
}
