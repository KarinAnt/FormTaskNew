import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addres',
  templateUrl: './addres.component.html',
  styleUrls: ['./addres.component.css']
})
export class AddresComponent implements OnInit {
  @Input() inputTrue: boolean;

  addres = this.fb.group({
    city: ['', Validators.required],
    stretName: ['', [Validators.required]],
    appartment: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
