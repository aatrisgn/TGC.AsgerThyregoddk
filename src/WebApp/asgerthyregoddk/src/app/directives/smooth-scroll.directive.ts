import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[smoothScroll]',
  standalone: true
})
export class SmoothScrollDirective {
  @Input('smoothScroll') targetId!: string;

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    const target = document.querySelector(this.targetId);
    if (target) {
      this.smoothScroll(target, 400)
    }
  }

  private smoothScroll(target: Element, duration: number): void {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  private easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
}