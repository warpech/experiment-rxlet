import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Customer } from '../customer.service';

@Component({
  selector: 'app-list-virtual-scroll-rxlet',
  templateUrl: './list-virtual-scroll-rxlet.component.html',
  styleUrls: ['./list-virtual-scroll-rxlet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListVirtualScrollRxLetComponent {
  @Input() items: Customer[] = [];
}
