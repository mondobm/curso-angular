import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductoService } from './../../../service/producto.service';
import { ActivatedRoute } from "@angular/router";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  
  //upload
  fileStorageRef:AngularFireStorageReference;
  task:AngularFireUploadTask;
  downloadUrl:string;
  uploadProgress:Observable<number>;
  
  constructor(private productoService:ProductoService,
    private route: ActivatedRoute,
    private router: Router,
    private afStorage:AngularFireStorage) { }
    
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
          this.producto= {
            nombre:"Super Drone con camera 4k",
            description:"description",
            precio:500
          }
          this.img = "https://www1.djicdn.com/cms/uploads/d21b3516988173bd21571c9ad980c238.png";
        }
      })
    }

    submit(){
      if(this.producto.id){
        console.log(this.producto)
        this.productoService.update(this.producto).then(resp=>{
          console.log("OK Update")
          this.router.navigate(['/administracion/home']);
        }).catch(error=>{
          console.error(error)
        })
      }else{
        this.productoService.add(this.producto).then(resp=>{
          console.log("OK Save")
          this.router.navigate(['/administracion/home']);
        }).catch(error=>{
          console.error(error)
        });
      }
    }
    
    uploadHeader(event){
      if(this.producto.imagines.length < 3){
        const id = Math.random().toString(36).substring(2);
        this.fileStorageRef = this.afStorage.ref(id);
        this.task = this.fileStorageRef.put(event.target.files[0])
        this.uploadProgress = this.task.percentageChanges();
        this.task.then(resp=>{
          resp.task.snapshot.ref.getDownloadURL().then(url=>{
            this.producto.imagines.push(url);
            this.img = this.producto.imagines[0];
            console.log(this.producto.imagines)
          })
        })
      }else{
        //Toast limite de imagines
      }
    }
  }