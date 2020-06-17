import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { SummaryComponent } from './summary/summary.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    SummaryComponent,
    HistoryItemComponent,
    AddComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
