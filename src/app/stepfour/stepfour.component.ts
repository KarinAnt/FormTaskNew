import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepfour',
  templateUrl: './stepfour.component.html',
  styleUrls: ['./stepfour.component.css']
})
export class StepfourComponent implements OnInit {
  @Input() stepOneArray:object;
  @Input() cardObject:object;
  @Input() addresObject:object;
  constructor() { }

  ngOnInit() {
  }

}
