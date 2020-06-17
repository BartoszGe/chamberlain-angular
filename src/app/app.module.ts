import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { GroceryStoreComponent } from './grocery-store/grocery-store.component';
import { HeaderComponent } from './header/header.component';
import { ProductDialogComponent } from './grocery-store/product-dialog/product-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GroceryStoreComponent,
    HeaderComponent,
    ProductDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
