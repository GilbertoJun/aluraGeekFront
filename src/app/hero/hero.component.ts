import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <div class="hero container">
      <div class="center __content">
        <h1>Dezembro promocional</h1>
        <h2>Produtos selecionados com 33% de desconto</h2>  
        <button class="botaoazul">Ver Consoles</button>
      </div>
    </div>
  `,
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
