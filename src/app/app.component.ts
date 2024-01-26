import { Component } from '@angular/core';
import { TopoComponent } from './topo/topo.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopoComponent, HeroComponent],
  template: `
    <app-topo></app-topo>
    <app-hero><app-hero>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aluraGeek';
}
