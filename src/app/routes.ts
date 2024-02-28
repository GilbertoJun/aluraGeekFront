import { Routes } from '@angular/router';
import { DetailsComponent } from './componentes/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { CardProdutoComponent } from './componentes/card-produto/card-produto.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProdutoComponent } from './pages/produto/produto.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'categoria/:id',
    component: CategoriaComponent,
    title: 'Categorias'
  },
  {
    path: 'produto/:id',
    component: ProdutoComponent,
    title: 'Produtos'
  }

];

export default routeConfig;
