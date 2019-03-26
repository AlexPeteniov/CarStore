import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { PropertyComponent } from './products/property/property.component';
import { DetailComponent } from './products/property/detail/detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { PropertyService } from './products/property/property.service';
import { EditComponent } from './products/property/edit/edit.component';
import {AppRoutingModule} from './app-routing.module';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { StartComponent } from './products/start/start.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductService } from './products/product.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    PropertyComponent,
    DetailComponent,
    DropdownDirective,
    EditComponent,
    ProductEditComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [PropertyService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
