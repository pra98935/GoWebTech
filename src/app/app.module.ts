import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

import { routes } from './app.router';
import { AngularComponent } from './angular/angular.component';
import { NodeComponent } from './node/node.component';
import { PhpComponent } from './php/php.component';
import { OracleSqlComponent } from './oracle-sql/oracle-sql.component';
import { MagentoComponent } from './magento/magento.component';
import { JavaComponent } from './java/java.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WeOffersComponent } from './we-offers/we-offers.component';
import { IndustrialTrainingComponent } from './industrial-training/industrial-training.component';
import { OurTrainingComponent } from './our-training/our-training.component';
import { ContactComponent } from './contact/contact.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WebPromotionComponent } from './web-promotion/web-promotion.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AdvanceJavaComponent } from './advance-java/advance-java.component';
import { AndroidComponent } from './android/android.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { ZendFrameworkComponent } from './zend-framework/zend-framework.component';
import { CakePhpComponent } from './cake-php/cake-php.component';
import { CodeigniterComponent } from './codeigniter/codeigniter.component';
import { JoomlaComponent } from './joomla/joomla.component';
import { DrupalComponent } from './drupal/drupal.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { YiiFrameworkComponent } from './yii-framework/yii-framework.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Title } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    AngularComponent,
    NodeComponent,
    PhpComponent,
    OracleSqlComponent,
    MagentoComponent,
    JavaComponent,
    WelcomeComponent,
    WhatWeDoComponent,
    WeOffersComponent,
    IndustrialTrainingComponent,
    OurTrainingComponent,
    ContactComponent,
    WebDevelopmentComponent,
    WebPromotionComponent,
    EcommerceComponent,
    AdvanceJavaComponent,
    AndroidComponent,
    WordpressComponent,
    ZendFrameworkComponent,
    CakePhpComponent,
    CodeigniterComponent,
    JoomlaComponent,
    DrupalComponent,
    DotnetComponent,
    YiiFrameworkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
