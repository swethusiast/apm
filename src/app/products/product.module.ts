import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailGuard } from './product-detail/product-detail.guard';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent,
  },
];
@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ProductModule {}
