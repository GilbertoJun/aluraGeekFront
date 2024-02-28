import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../interfaces/produto';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  template: `
    <p>
      produto works! {{produtoId}}
    </p>
  `,
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  produtoId = -1;

  constructor(){
    this.produtoId = Number(this.route.snapshot.params['id']);
  }

}
