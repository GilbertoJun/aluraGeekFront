import { Component } from '@angular/core';
import { TopoComponent } from './topo/topo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopoComponent],
  template: `
    <app-topo></app-topo>  
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aluraGeek';
}
