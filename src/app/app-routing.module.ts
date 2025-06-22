import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductPricesComponent } from './product-prices/product-prices.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PostsComponent } from './posts/posts.component'; 

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product-prices', component: ProductPricesComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'posts', component: PostsComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
