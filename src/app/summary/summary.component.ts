import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {}

  sum() {
    return this.summaryService.sum();
  }
}
