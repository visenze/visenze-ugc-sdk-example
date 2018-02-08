import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowseModule } from './modules/browse/browse.module';
import { ModalModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { ProductDetailComponent } from './modules/browse/product-detail/product-detail.component';
import { ImagePageComponent } from './modules/browse/image-page/image-page.component';

const appRoutes: Routes = [
  { path: 'product/:campaignId/:imName', component: ProductDetailComponent },
  { path: '', component: ImagePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ImagePageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowseModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
