import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoListCardComponent } from './components/producto-list-card/producto-list-card.component';


@NgModule({
  declarations: [HomeComponent, ProductoComponent, HeaderComponent, FooterComponent, ProductoListCardComponent],
  imports: [
    CommonModule,
    TiendaRoutingModule
  ]
})
export class TiendaModule { }
