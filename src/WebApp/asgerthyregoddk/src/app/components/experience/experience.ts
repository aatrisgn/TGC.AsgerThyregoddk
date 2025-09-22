import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  activeIndex: number | null = 0;

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
