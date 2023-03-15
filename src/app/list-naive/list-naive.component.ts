import { Component, Input } from '@angular/core';
import { Customer } from '../customer.service';

@Component({
  selector: 'app-list-naive',
  templateUrl: './list-naive.component.html',
  styleUrls: ['./list-naive.component.css']
})
export class ListNaiveComponent {
  @Input() items: Customer[] = [];
}
