import { NgModule,Component, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import * as $ from "jquery";
import {HttpClient,  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductPricesComponent } from './product-prices/product-prices.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CheckoutComponent,
    ProductPricesComponent,
    PostsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/