import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
  @Input() value!: Customer['credit'];
  @Input() useRxLet = false;

  constructor() { }

  ngOnInit(): void {
  }

}
