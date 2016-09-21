import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductService} from './services/product.service';
import { ShopifyService} from './services/shopify.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule,
    DatepickerModule
  ],
  providers: [
    ProductService,
    ShopifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
