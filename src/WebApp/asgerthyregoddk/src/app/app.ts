import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from "./components/footer/footer";
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Welcome } from "./components/welcome/welcome";
import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import { Education } from "./components/education/education";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Footer, Contact, About, Welcome, Header, Experience, Education, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('asgerthyregoddk');
  showScrollTop = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
