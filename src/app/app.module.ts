import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductsComponent} from './products/productModule/products.component';
import {ProductListComponent} from './products/productModule/product-list/product-list.component';
import {ProductDetailComponent} from './products/productModule/product-detail/product-detail.component';
import {ProductItemComponent} from './products/productModule/product-item/product-item.component';
import {PropertyComponent} from './products/propertyModule/property.component';
import {PropertyService} from './products/propertyModule/property.service';
import {DetailComponent} from './products/propertyModule/detail/detail.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {EditComponent} from './products/propertyModule/edit/edit.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductEditComponent} from './products/productModule/product-edit/product-edit.component';
import {StartComponent} from './products/start/start.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ProductService} from './products/productModule/product.service';
import {ClickStopPropagationDirective} from './shared/cickStopPropagation';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

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
    StartComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PropertyService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
