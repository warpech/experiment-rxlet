import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { LetModule } from '@rx-angular/template/let';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { ListNaiveComponent } from './list-naive/list-naive.component';
import { ListVirtualScrollComponent } from './list-virtual-scroll/list-virtual-scroll.component';
import { ListAgGridComponent } from './list-ag-grid/list-ag-grid.component';
import { CustomerRendererComponent } from './list-ag-grid/customer-renderer/customer-renderer.component';
import { AmountRendererComponent } from './list-ag-grid/amount-renderer/amount-renderer.component';
import { AmountComponent } from './amount/amount.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNaiveComponent,
    ListVirtualScrollComponent,
    ListAgGridComponent,
    CustomerRendererComponent,
    AmountRendererComponent,
    AmountComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    LetModule,
    FormsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
