import { Component, Input } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  template: `
    <div class="card-produto">
      <img src="/assets/produto/unsplash_6FDXGY9J6y4.png">
      <p class="font-16">{{produto.name}}</p>
      <p class="weight-700">R$ {{produto.price}},00</p>
      <a href="" class="color-azul weight-700">Ver produto</a>

    </div>
  `,
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
}
