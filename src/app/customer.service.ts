import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

export interface Customer {
  name: string;
}

function generateRandomNames(): string[] {
  const names: string[] = [];
  for (let i = 0; i < 1000; i++) {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    names.push(name);
  }
  return names;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly customers = generateRandomNames().map(x => { return { name: x } });

  constructor() { }

  getCustomers() {
    return this.customers;
  }
}
