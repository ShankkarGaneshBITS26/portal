import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from '../shared/services/products.service';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [ItemFormComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
