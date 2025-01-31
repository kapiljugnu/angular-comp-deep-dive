import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // css become global
  // host: {
  //   class: 'control' // add class to  app-control, one place to define common property
  // }
})
export class ControlComponent {
  @HostBinding('class') className = 'control'; // property name can be anything
  @Input({ required: true }) label!: string;
}
