import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { GroceryStoreComponent } from './grocery-store/grocery-store.component';
import { HeaderComponent } from './header/header.component';
import { ProductDialogComponent } from './grocery-store/product-dialog/product-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ProductRequestDialogComponent } from './grocery-store/product-request-dialog/product-request-dialog.component';
import { ShopFinalizationDialogComponent } from './grocery-store/shop-finalization-dialog/shop-finalization-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryStoreComponent,
    HeaderComponent,
    ProductDialogComponent,
    ProductRequestDialogComponent,
    ShopFinalizationDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
