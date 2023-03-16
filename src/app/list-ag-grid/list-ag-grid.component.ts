import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { Customer } from '../customer.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { CustomerRendererComponent } from './customer-renderer/customer-renderer.component';
import { AmountRendererComponent } from './amount-renderer/amount-renderer.component';

@Component({
  selector: 'app-list-ag-grid',
  templateUrl: './list-ag-grid.component.html',
  styleUrls: ['./list-ag-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListAgGridComponent {
  @Input() items: Customer[] = [];

  // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
  { field: 'name', cellRenderer: CustomerRendererComponent },
  { field: 'credit', cellRenderer: AmountRendererComponent }
];

// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  flex: 1,
  width: 100
};

public rowHeight = 20;

// For accessing the Grid's API
@ViewChild(AgGridAngular) agGrid!: AgGridAngular;

constructor() {}

// Example of consuming Grid Event
onCellClicked( e: CellClickedEvent): void {
  console.log('cellClicked', e);
}

// Example using Grid's API
clearSelection(): void {
  this.agGrid.api.deselectAll();
}
}
