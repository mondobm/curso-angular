import { Component, OnInit } from '@angular/core';
import { ProductoService } from  './../../../service/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {
  
  constructor(private productoService:ProductoService) { }
  productos:any=[]
  
  ngOnInit() {
    this.productoService.list().then(productos=>{
      productos.forEach(productoData=>{
        let producto = productoData.data();
        producto.id = productoData.id;
        this.productos.push(producto);
      })
      console.log(this.productos)
    })
  }
  
  borrar(id:string){
    this.productoService.borrar(id).then(resp=>{
      console.log("Borrar")
      this.borrarLista(id);
    });
  }

  private borrarLista(id:string){
    let index = 0;
    for(index;index<this.productos.length;index++){ 
      if(this.productos[index].id == id){
        this.productos.splice(index,1);
      }
    }
  }

}