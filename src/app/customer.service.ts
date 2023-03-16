import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { interval, map, Observable, of, shareReplay, startWith } from 'rxjs';

export interface Customer {
  name: string;
  amount$: Observable<number>;
}

// Create an observable that emits a new number every 5 seconds
const amountFactory = () => {
  const start = Date.now();
  return interval(5000).pipe(
    map(() => { 
      return Math.round((Date.now() - start) / 1000) 
    }),
    startWith(0),
    shareReplay()
  )
};

function generateRandomNames(): string[] {
  const names: string[] = [];
  for (let i = 0; i < 150; i++) {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    names.push(name);
  }
  return names;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly customers = generateRandomNames().map(x => { return { name: x, amount$: amountFactory() } });

  constructor() { }

  getCustomers() {
    return this.customers;
  }
}
