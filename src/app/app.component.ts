import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  protected readonly customers = this.CustomerService.getCustomers();

  constructor(private CustomerService: CustomerService) {
    
  }
}
