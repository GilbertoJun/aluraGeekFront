import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SecaoProdutosComponent } from '../secao-produtos/secao-produtos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SecaoProdutosComponent],
  template: `
    <app-hero></app-hero>
    <div class="center">
    <div class="container">
         <app-secao-produtos></app-secao-produtos>
         <app-secao-produtos></app-secao-produtos>
         <app-secao-produtos></app-secao-produtos>

       </div>
     </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
