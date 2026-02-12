import {Component} from '@angular/core';
import {Navbar} from '../../core/navbar/navbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    RouterOutlet
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  currentYear = new Date().getFullYear();
}
