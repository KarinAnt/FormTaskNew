import { Component, OnInit, Input,  Output, EventEmitter  } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addres',
  templateUrl: './addres.component.html',
  styleUrls: ['./addres.component.css']
})
export class AddresComponent implements OnInit {
  @Input() inputTrue: boolean;
  @Output() noNextAdd = new EventEmitter();
  @Output() addresArray = new EventEmitter();
  @Input() backAddresArray: object;

  addres = this.fb.group({
    city: ['', Validators.required],
    stretName: ['', Validators.required],
    appartment: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addres.setValue({
      city: this.backAddresArray['city'],
      stretName:this.backAddresArray['stretName'] ,
      appartment:this.backAddresArray['appartment'] 
    });
  }
  changeThis(){
    this.noNextAdd.emit(this.addres.valid);
    this.addresArray.emit(this.addres.value);  
  }
}
