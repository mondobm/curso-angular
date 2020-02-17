import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../../service/producto.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto:any={
    nombre:"",
    description:"",
    precio:0,
    imagines:[]
  };
  img:string="";
  constructor(private productoService:ProductoService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      if(param.has("id")){
        this.productoService.get(param.get("id")).subscribe(resp=>{
          console.log(resp.data())
          this.producto = resp.data();
          this.producto.id = resp.id;
          if(this.producto.imagines && this.producto.imagines.length > 0){
            this.img = this.producto.imagines[0];
          }else{
            this.img = "https://www1.djicdn.com/cms/uploads/d21b3516988173bd21571c9ad980c238.png";
            this.producto.imagines = [];
          }
        },
        error=>{})
      }else{
        this.img = "https://www1.djicdn.com/cms/uploads/d21b3516988173bd21571c9ad980c238.png";
      }
    })
  }

  updatePreview(url:string){
    this.img = url;
  }

}
