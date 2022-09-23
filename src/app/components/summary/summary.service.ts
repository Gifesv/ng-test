import { Injectable } from '@angular/core';
import { mockData } from './summery.constants';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  getData() {
    return mockData;
  }
}
