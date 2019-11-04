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
    radios: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]]
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }
  backToStepTwo(){
    this.backStepTwo.emit(true);
  }
  validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
          if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);           
      }
    });
  }
  stepFour(){
    this.subscribeLater.controls['email'].updateValueAndValidity();
    if(this.subscribeLater.value.radios == 'subscribe'){
      this.subscribeLater.controls["email"].setValidators([Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]);
    }else if(this.subscribeLater.value.radios == 'later' ){
      this.subscribeLater.controls['email'].clearValidators();
    }
    if(this.subscribeLater.valid){
      this.toStepFour.emit(false);
    }else{
      this.validateAllFormFields(this.subscribeLater);
    }
  }
  onChange(){
    this.subscribeLater.controls['email'].updateValueAndValidity();
    if(this.subscribeLater.value.radios == 'subscribe'){
      this.subscribeLater.controls["email"].setValidators([Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]);
    }else if(this.subscribeLater.value.radios == 'later' ){
      this.subscribeLater.controls['email'].clearValidators();
    }
  }
}
