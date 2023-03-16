import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly title = 'my-app';
  protected showList1 = true;
  protected showList2 = true;
  protected showList3 = true;
  protected showList4 = true;
  protected useRxLet = true;
  protected readonly customers = this.CustomerService.getCustomers();

  constructor(private CustomerService: CustomerService) {
    
  }
}
