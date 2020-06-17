import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  // mock
  expenses: Expense[] = [
    { price: 150, title: 'Apples', dt: new Date() },
    { price: 25, title: 'Bread', dt: new Date() },
    { price: 52, title: 'Candies', dt: new Date() },
    { price: 46, title: 'Transport', dt: new Date() },
  ];

  constructor() {}

  add(expense: Expense) {
    this.expenses.push(expense);
  }

  remove(expense: Expense) {
    this.expenses.splice(this.expenses.indexOf(expense), 1);
  }

  clear() {
    this.expenses = [];
  }

  sum() {
    try {
      return this.expenses
        .map((exp) => exp.price)
        .reduce((prev, cur) => prev + cur);
    } catch {
      return 0;
    }
  }
}
