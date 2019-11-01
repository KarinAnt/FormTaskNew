import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  @Input() inputTrue: boolean;
  card = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.minLength(19)]],
    owner: ['', [Validators.required, Validators.pattern('^(Mr)|(Mrs)')]],
    cw: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    expiration: ['']
  });
  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit() {

  
  }

}
