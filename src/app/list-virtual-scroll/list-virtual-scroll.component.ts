import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-virtual-scroll',
  templateUrl: './list-virtual-scroll.component.html',
  styleUrls: ['./list-virtual-scroll.component.css']
})
export class ListVirtualScrollComponent {
  @Input() items: string[] = [];
}
