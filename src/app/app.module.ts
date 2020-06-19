import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {GroceryStoreComponent} from './grocery-store/grocery-store.component';
import {HeaderComponent} from './header/header.component';
import {ProductDialogComponent} from './grocery-store-utils/product-dialog/product-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ProductRequestDialogComponent} from './grocery-store/product-request-dialog/product-request-dialog.component';
import {ShopFinalizationDialogComponent} from './grocery-store/shop-finalization-dialog/shop-finalization-dialog.component';
import {MomentDateTimeAdapter} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';
import {LoginDialogComponent} from './header/login-dialog/login-dialog.component';
import {GroceryStoreManagementComponent} from './grocery-store-management/grocery-store-management.component';

import {
  DateTimeAdapter,
  OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE,
  OwlDateTimeModule,
  OwlNativeDateTimeModule
} from 'ng-pick-datetime';
import {ProductCreationDialogComponent} from './grocery-store-management/product-creation-dialog/product-creation-dialog.component';

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'YYYY-MM-DD HH:mm:ss',
  parseInput: 'YYYY-MM-DD HH:mm:ss',
  datePickerInput: 'YYYY-MM-DD HH:mm:ss',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
};

@NgModule({
  declarations: [
    AppComponent,
    GroceryStoreComponent,
    HeaderComponent,
    ProductDialogComponent,
    ProductRequestDialogComponent,
    ShopFinalizationDialogComponent,
    LoginDialogComponent,
    GroceryStoreManagementComponent,
    ProductCreationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [
    {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
