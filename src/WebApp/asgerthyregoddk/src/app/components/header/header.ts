import { Component } from '@angular/core';
import { SmoothScrollDirective } from '../../directives/smooth-scroll.directive';

@Component({
  selector: 'app-header',
  imports: [SmoothScrollDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
