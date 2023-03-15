import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-naive',
  templateUrl: './list-naive.component.html',
  styleUrls: ['./list-naive.component.css']
})
export class ListNaiveComponent {
  @Input() items: string[] = [];
}
