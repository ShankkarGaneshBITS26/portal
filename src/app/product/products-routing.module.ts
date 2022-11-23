import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ItemFormComponent
  },
  {
    path: 'catalog/:productId',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
