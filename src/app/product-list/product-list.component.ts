import { Component, OnInit, OnDestroy,} from '@angular/core';
import { products } from '../products';
export interface ProductDetails
{
  name : string,
  b: string,
  v: string,
  s: boolean
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit, OnDestroy {
  products_list = products;
  defaultPage = 1;
  name = 1;

  productname: any;
  addProduct() {
    
    console.log(this.productname);
  }   
  onChange(event: Event): void {
    console.log(event);
    // write your code here
  }
  ngOnInit(): void
  {
    this.loadPage();
  }
  loadPage(): void
  {
    this.defaultPage = 1;
  }
  
  ngOnDestroy(): void { 

  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/