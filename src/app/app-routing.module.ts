import { NgModule } from '@angular/core';import { Routes, RouterModule } from '@angular/router';import { ProductsComponent } from './products/productModule/products.component';import { ProductDetailComponent } from './products/productModule/product-detail/product-detail.component';import { PropertyComponent } from './products/propertyModule/property.component';import { DetailComponent } from './products/propertyModule/detail/detail.component';import { EditComponent } from './products/propertyModule/edit/edit.component';import {StartComponent} from './products/start/start.component';import {ProductEditComponent} from './products/productModule/product-edit/product-edit.component';import {ProductListComponent} from './products/productModule/product-list/product-list.component';const appRoutes: Routes = [  { path: '', redirectTo: '/products', pathMatch: 'full' },  { path: 'products/new', component: ProductEditComponent},  { path: 'products/start', component: StartComponent },  { path: 'products/product-list', component: ProductListComponent},  { path: 'products', component: ProductsComponent},  { path: 'products/:id', component: ProductDetailComponent},  { path: 'property', component: PropertyComponent},  { path: 'propertyModule/edit', component: EditComponent},  { path: 'propertyModule/detail', component: DetailComponent},];@NgModule({  imports: [RouterModule.forRoot(appRoutes)],  exports: [RouterModule]})export class AppRoutingModule {}