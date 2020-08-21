import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home/home.component';
import { NavComponent } from './Pages/home/nav/nav.component';
import { ProjectListingItemComponent } from './shared/project-listing-item/project-listing-item.component';
import { ProjectListingPageComponent } from './Pages/project-listing-page/project-listing-page.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectDetailsComponent } from './Pages/project-details/project-details.component';
import { NguCarouselModule } from '@ngu/carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectDetailsFromUrlResolver } from './costumClasses/projectDetailsFromUrlResolver';
import { AgmCoreModule } from '@agm/core';
import { Constants } from './constant';
import { TranslationService } from './services/translate-service';


// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, Constants.baseUrlServer + Constants.TranslationFilePath);
// }
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProjectListingItemComponent,
    ProjectListingPageComponent,
    ContactPageComponent,
    FooterComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NguCarouselModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
        //useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwVuYiM-83l2IdjpT9uC0lg4jBm8-w4j8'
    })
  ],
  providers: [ProjectDetailsFromUrlResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
