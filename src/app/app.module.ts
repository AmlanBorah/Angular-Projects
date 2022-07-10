import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentgatewayComponent } from './components/paymentgateway/paymentgateway.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsApiService } from './services/products-api.service';
import { ComponentsApiService } from './services/components-api.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    PaymentgatewayComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ProductsApiService, ComponentsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
