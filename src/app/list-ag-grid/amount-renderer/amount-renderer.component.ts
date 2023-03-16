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
  useRxLet = false;

  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
    this.useRxLet = params.context.useRxLet;
  }

  refresh(params: ICellRendererParams) {
    return false;
  }

}
