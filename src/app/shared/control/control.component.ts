import { Component, Input, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // css become global
  host: {
    class: 'control', // add class to  app-control, one place to define common property
    // '(click)': 'onClick()'
  }
})
export class ControlComponent {
  @Input({ required: true }) label!: string;

  @HostListener('click') onClick() {
    console.log('clicked');
  }
}
