import { Component, Input } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [],
  template: `
    <p>
      Teste

    </p>
  `,
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
}
