import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './card-produto/card-produto.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CardProdutoComponent
  ],
  exports: [
    CardProdutoComponent
  ]
})
export class AppModule { }
