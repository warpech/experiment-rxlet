import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { ListNaiveComponent } from './list-naive/list-naive.component';
import { ListVirtualScrollComponent } from './list-virtual-scroll/list-virtual-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNaiveComponent,
    ListVirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
