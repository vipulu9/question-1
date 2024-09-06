import { Component } from '@angular/core';
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'app-component-a',
  standalone: true,  // Mark it as standalone
  template: `
    <button (click)="increaseCount()">Increase Count</button>
  `,
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {
  count: number = 0;

  constructor(private bridgeService: BridgeService) {}

  increaseCount() {
    this.count++;
    this.bridgeService.updateCount(this.count);
  }
}
