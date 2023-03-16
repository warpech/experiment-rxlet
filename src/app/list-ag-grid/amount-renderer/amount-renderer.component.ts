import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { of } from 'rxjs';

@Component({
  selector: 'app-amount-renderer',
  templateUrl: './amount-renderer.component.html',
  styleUrls: ['./amount-renderer.component.css']
})
export class AmountRendererComponent implements OnInit, ICellRendererAngularComp {
  value = { amount$: of(0) };

  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams): void {
    console.log('params', params.value);
    this.value = params.value;
  }

  refresh(params: ICellRendererParams) {
    return false;
  }

}
