import { Component } from '@angular/core';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'app-home',
  standalone: true,  // Mark it as standalone
  imports: [ComponentAComponent, ComponentBComponent],  // Import necessary components
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
