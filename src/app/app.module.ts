import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { LetModule } from '@rx-angular/template/let';

import { AppComponent } from './app.component';
import { ListNaiveComponent } from './list-naive/list-naive.component';
import { ListVirtualScrollComponent } from './list-virtual-scroll/list-virtual-scroll.component';
import { ListVirtualScrollRxLetComponent } from './list-virtual-scroll-rxlet/list-virtual-scroll-rxlet.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNaiveComponent,
    ListVirtualScrollComponent,
    ListVirtualScrollRxLetComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    LetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
