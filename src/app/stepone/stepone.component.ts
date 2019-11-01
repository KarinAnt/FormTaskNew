import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import { filter } from 'minimatch';

@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css']
})
export class SteponeComponent implements OnInit {
  @Output() nextToStepTwo = new EventEmitter();
  nextStepTwo = true;
  comparePasswordsText: string;
  comparePasswordsErr: boolean =false;
  stepOne = this.fb.group({
    userName: ['', [Validators.required,]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9\_]+@[a-z]{1,7}\.[a-z]{1,4}$')]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    confirmPassword: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  next(){
    this.nextStepTwo = false;
    this.comparePasswords();
    this.validateAllFormFields(this.stepOne);
    // if(this.stepOne.valid && !this.comparePasswordsErr) {
      this.nextToStepTwo.emit(false); 
    // } else {
      // this.validateAllFormFields(this.stepOne);
    // }
    
  }

  comparePasswords() {
    if( this.stepOne.get('password').value !== this.stepOne.get('confirmPassword').value) {
      this.comparePasswordsErr = true;
      this.comparePasswordsText = 'Passwords does not match'
    }else{
      this.comparePasswordsErr = false;
    }
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

  getControls(formGroup: FormGroup) {
    return formGroup.controls
  }

  showError(formGroup: FormGroup, field) {
    return this.getControls(formGroup)[field].invalid && formGroup.controls[field].touched
  }

  getErrorMessage(field){
    console.count()
    console.log(this.getControls(this.stepOne), 'this.getControls(ste)');
    switch(field){
      case 'email': 
      const emailErrors = this.getControls(this.stepOne).email.errors;
          if(emailErrors.required){
              return 'email is required';
          } else {
            return 'No Email';
          }
          break;
      case 'userName':
          const nameErrors = this.getControls(this.stepOne).userName.errors;
          if(nameErrors.required){
              return 'User Name is required';
          }
          break;
      case 'password':
          const passErrors = this.getControls(this.stepOne).password.errors;
          if(passErrors.required){
            return 'Password is required';
          }else if(passErrors.minlength){
            return 'Password is min!!!'
          }else if(passErrors.maxlength){
            return 'Password is max!!!'
          }
          break;    
    }
  }
}
