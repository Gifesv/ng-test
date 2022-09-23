import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SummaryService } from './summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  readonly cards = [
    {
      type: 'income',
      name: 'Income',
    },
    {
      type: 'investment',
      name: 'Investments',
    },
    {
      type: 'outcome',
      name: 'Outcome',
    },
    {
      type: 'loans',
      name: 'Loans',
    },
  ];

  constructor(private readonly service: SummaryService) {}

  getData() {
    return this.service.getData();
  }

  getTotal() {
    return this.getData().total;
  }

  getCardData(type: string) {
    const { data } = this.getData();
    return data.filter((el) => el.type === type).length;
  }
}
