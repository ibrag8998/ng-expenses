import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent implements OnInit {
  @Input() expense: Expense;

  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {}

  handleDelete() {
    this.summaryService.remove(this.expense);
  }
}
