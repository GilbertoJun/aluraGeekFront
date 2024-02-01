import { Component, Input } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  template: `
    <div class="card-produto">
      <img src="/assets/produto/{{produto.imageUrl}}">
      <p>{{produto.name}}</p>
      <p>{{produto.price}}</p>
      <a href="">Ver produto</a>

    </div>
  `,
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
}
