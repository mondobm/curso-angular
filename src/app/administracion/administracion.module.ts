import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';


@NgModule({
  declarations: [HomeComponent, ProductoComponent, HeaderComponent, FooterComponent, ProductoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
