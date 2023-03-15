import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Customer } from '../customer.service';

@Component({
  selector: 'app-list-virtual-scroll',
  templateUrl: './list-virtual-scroll.component.html',
  styleUrls: ['./list-virtual-scroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListVirtualScrollComponent {
  @Input() items: Customer[] = [];
}
