import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';

@Component({
  imports: [Student],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  author = "Pietro";

}
