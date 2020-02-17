import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdministracionModule } from './administracion/administracion.module';
import { TiendaModule } from './tienda/tienda.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    AdministracionModule,
    TiendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
