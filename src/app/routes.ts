import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'nathanbaitola',
    component: DetailsComponent,
    title: 'Barts baitola'
  },
  {
    path: 'categoria/:id',
    component: CategoriaComponent,
    title: 'Categorias'
  }

];

export default routeConfig;
