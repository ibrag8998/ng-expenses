import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  newExpense = '';

  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {}

  handleAdd(): void {
    this.summaryService.add({
      price: 0,
      title: this.newExpense,
      dt: new Date(),
    });
    this.newExpense = '';
  }
}
