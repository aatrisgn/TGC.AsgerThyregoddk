import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmoothScrollDirective } from './directives/smooth-scroll.directive';
import { Footer } from "./components/footer/footer";
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Welcome } from "./components/welcome/welcome";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SmoothScrollDirective, Footer, Contact, About, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('asgerthyregoddk');
}
