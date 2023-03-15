import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

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
export class NameService {

  private readonly names = generateRandomNames();

  constructor() { }

  getNames() {
    return this.names;
  }
}
