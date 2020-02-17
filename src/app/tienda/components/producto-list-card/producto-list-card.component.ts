import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../../service/producto.service';

@Component({
  selector: 'app-producto-list-card',
  templateUrl: './producto-list-card.component.html',
  styleUrls: ['./producto-list-card.component.scss']
})
export class ProductoListCardComponent implements OnInit {

  productos:any=[];
  constructor(private productoService:ProductoService) { }

  ngOnInit() {
    this.productoService.list().then(resp=>{
      resp.forEach(producto=>{
        let productoData = producto.data();
        productoData.id = producto.id;
        if(productoData.imagines){
          this.productos.push(productoData)
        }
      })
      console.log(this.productos)
    })
  }

}
