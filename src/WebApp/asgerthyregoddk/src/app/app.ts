import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Welcome } from "./components/welcome/welcome";
import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import { Education } from "./components/education/education";
import { Projects } from "./components/projects/projects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Contact, About, Welcome, Header, Experience, Education, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('asgerthyregoddk');
}
