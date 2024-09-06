import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  private countSource = new BehaviorSubject<number>(0);
  currentCount = this.countSource.asObservable();

  constructor() { }

  updateCount(count: number) {
    this.countSource.next(count);
  }
}
