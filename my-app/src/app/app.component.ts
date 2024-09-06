import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',  // This should match the <app-root> in index.html
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
