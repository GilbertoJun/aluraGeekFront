import { Component, Input } from '@angular/core';
import { CardProdutoComponent } from '../card-produto/card-produto.component';

@Component({
  selector: 'app-secao-produtos',
  standalone: true,
  imports: [],
  template: `
    <section>
      {{cardProduto}}
    </section>
  `,
  styleUrl: './secao-produtos.component.css'
})
export class SecaoProdutosComponent {
  @Input() cardProduto!: CardProdutoComponent;
}
