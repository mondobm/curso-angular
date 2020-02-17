import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productoCollection = 'Productos';
  productoRef: AngularFirestoreCollection ;
  constructor (private afs: AngularFirestore) {
    this.productoRef = afs.collection(this.productoCollection);
  }
  
  get(id:string){
    return this.productoRef.doc(id).get();
  }
  
  list(){
    var leadsRef = this.afs.firestore.collection(this.productoCollection);
    return leadsRef.get();
  }
  
  add(producto:any){
    return this.productoRef.add({...producto});
  }
  
  update(producto:any){
    if(producto.id){
      return this.productoRef.doc(producto.id).update(producto);
    }
  }
  
  borrar(id:string){
    return this.productoRef.doc(id).delete()
  }
}