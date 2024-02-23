import { Component, Input } from '@angular/core';
import { Produto } from '../../interfaces/produto';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  template: `
    <div class="card-produto">
      <div class="imagem-produto" style="background-image: url('{{produto.imageUrl ? produto.imageUrl : './assets/produto/produto-default.jpg'}}');"></div>
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
