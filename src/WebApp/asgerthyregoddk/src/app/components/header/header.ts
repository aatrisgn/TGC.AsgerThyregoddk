import { Component, HostListener } from '@angular/core';
import { SmoothScrollDirective } from '../../directives/smooth-scroll.directive';

@Component({
  selector: 'app-header',
  imports: [SmoothScrollDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
