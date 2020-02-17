import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';


const routes: Routes = [
  {path:'tienda/home',component:HomeComponent},
  {path:'tienda/producto/:id',component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
