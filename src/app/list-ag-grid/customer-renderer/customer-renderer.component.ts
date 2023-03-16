import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-customer-renderer',
  templateUrl: './customer-renderer.component.html',
  styleUrls: ['./customer-renderer.component.css']
})
export class CustomerRendererComponent implements OnInit, ICellRendererAngularComp {
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams) {
    return false;
  }

}
