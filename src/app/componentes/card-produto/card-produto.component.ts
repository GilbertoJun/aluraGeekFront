import { Component, Input } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="card-produto {{large ? 'large' : ''}}">
      <div class="imagem-produto" style="background-image: url('{{produto.imageUrl ? produto.imageUrl : './assets/produto/produto-default.jpg'}}');"></div>
      <div class="content">
        <p class="font-16 product-name">{{produto.name}}</p>
        <p class="weight-700">R$ {{produto.price}},00</p>
        <a [routerLink]="['/produto/' + produto.id]" class="color-azul weight-700 {{large ? 'd-none' : ''}}">Ver produto</a>
        <p *ngIf="large">
          {{produto.description}}
        </p>

      </div>

    </div>
  `,
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
  @Input() large!: Boolean;
}
