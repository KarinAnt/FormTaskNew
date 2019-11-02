import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { map,tap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  @Input() inputTrue: boolean;
  @Output() noNext = new EventEmitter();
  @Output() cardArray = new EventEmitter();
  @Input() backCardArray: object;
  card = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.minLength(19)]],
    owner: ['', [Validators.required, Validators.pattern('^(Mr\. )|(Mrs\. )|(Mss\. )')]],
    cw: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
    expiration: ['', [Validators.required, Validators.pattern('[\/0-9]+')]]
  });
  get cardInput() {
    return this.card.get("cardNumber")
   }
  get exDate() {
    return this.card.get("expiration")
  }
  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {  
    this.card.setValue({
      cardNumber: this.backCardArray['cardNumber'],
      owner:this.backCardArray['owner'] ,
      cw:this.backCardArray['cw'] ,
      expiration:this.backCardArray['expiration']
    }); 
     this.cardInput.valueChanges.pipe(
       distinctUntilChanged(),
       map(value => this.formatCardNumber(value)),
       tap(value => this.cardInput.patchValue(value))
     ).subscribe();
     this.exDate.valueChanges.pipe(
      distinctUntilChanged(),
      map(value => this.formatExDate(value)),
      tap(value => this.exDate.patchValue(value))
      ).subscribe();
   }
  private formatCardNumber(value: string): string {
     return value
       .replace(/\s+/g, "")
       .replace(/\D/g, "")
       .slice(0, 16)
       .replace(/(\d{4})(?!$)/g, "$1 ");
   }
 private formatExDate(value: string): string {
    return value
      .replace(/\/+/g, "")
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(\d{2})(?!$)/g, "$1/");
  }
  changeThis(){
       this.noNext.emit(this.card.valid);  
       this.cardArray.emit(this.card.value);  

  }
}
