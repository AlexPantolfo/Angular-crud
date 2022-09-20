import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponentModule } from './shared/material-component/material-component.module';
import { NewProductDialogComponent } from './new-product-dialog/new-product-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NewProductDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
