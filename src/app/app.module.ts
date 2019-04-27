import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductsComponent} from './products/productModule/products.component';
import {ProductListComponent} from './products/productModule/product-list/product-list.component';
import {ProductDetailComponent} from './products/productModule/product-detail/product-detail.component';
import {ProductItemComponent} from './products/productModule/product-list/product-item/product-item.component';
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
import { AppInputComponent } from './ui components/input/app-input.component';
import { RadioComponent } from './ui components/radio/radio.component';
import { ButtonComponent } from './ui components/button/button.component';
import {AuthService} from './auth.service';
import { SharedModule } from './shared/shared.module';
import { OrderModule } from 'ngx-order-pipe';


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
    ClickStopPropagationDirective,
    AppInputComponent,
    RadioComponent,
    ButtonComponent,
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
    ToastrModule.forRoot(),
    SharedModule,
    OrderModule
  ],
  providers: [PropertyService, ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
