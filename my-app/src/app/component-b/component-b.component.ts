import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'app-component-b',
  standalone: true,  // Mark it as standalone
  template: `
    <input type="number" [value]="count" readonly />
  `,
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  count: number = 0;

  constructor(private bridgeService: BridgeService) {}

  ngOnInit(): void {
    this.bridgeService.currentCount.subscribe(count => {
      this.count = count;
    });
  }
}
