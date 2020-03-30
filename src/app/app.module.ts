import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Custom components
 */
import { RouterModule } from '@angular/router';
import { DesignComponent } from './common-components/design/design.component';
import { ProductsComponent } from './common-components/products/products.component';
import { FiltersComponent } from './common-components/filters/filters.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { HeaderComponent } from './common-components/header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
/**
 * Custom services
 */
import { FiltersService } from './common-services/filters.service';
import { PhotosService } from './common-services/photos.service';
import { TemplateService } from './common-services/template.service';
@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    ProductsComponent,
    FiltersComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      {
        path: "product",
        component: ProductsComponent
      },
      {
        path: "design",
        component: DesignComponent
      },
      {
        path: "",
        component: DesignComponent
      }
    ])
  ],
  providers: [FiltersService, PhotosService, TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
