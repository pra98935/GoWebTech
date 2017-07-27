import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import{ AppComponent } from "./app.component";
import{ AboutComponent } from "./about/about.component";
import{ HomeComponent } from "./home/home.component";
import{ ServiceComponent } from "./service/service.component";
import{ AngularComponent } from "./angular/angular.component";
import{ NodeComponent } from "./node/node.component";
import{ PhpComponent } from "./php/php.component";
import{ OracleSqlComponent } from "./oracle-sql/oracle-sql.component";
import{ MagentoComponent } from "./magento/magento.component";
import{ JavaComponent } from "./java/java.component";

import{ WebPromotionComponent } from "./web-promotion/web-promotion.component";
import{ WebDevelopmentComponent } from "./web-development/web-development.component";
import{ WordpressComponent } from "./wordpress/wordpress.component";
import{ ZendFrameworkComponent } from "./zend-framework/zend-framework.component";
import{ YiiFrameworkComponent } from "./yii-framework/yii-framework.component";
import{ EcommerceComponent } from "./ecommerce/ecommerce.component";
import{ DrupalComponent } from "./drupal/drupal.component";
import{ DotnetComponent } from "./dotnet/dotnet.component";
import{ ContactComponent } from "./contact/contact.component";
import{ CodeigniterComponent } from "./codeigniter/codeigniter.component";
import{ CakePhpComponent } from "./cake-php/cake-php.component";
import{ AdvanceJavaComponent } from "./advance-java/advance-java.component";
import{ IndustrialTrainingComponent } from "./industrial-training/industrial-training.component";
import{ OurTrainingComponent } from "./our-training/our-training.component";
import{ AndroidComponent } from "./android/android.component";
import{ JoomlaComponent } from "./joomla/joomla.component";

export const router: Routes = [
    { path: "", redirectTo:"home", pathMatch:"full" }, //set default component
    { path: "about", component:AboutComponent},
    { path: "service", component:ServiceComponent},
    { path: "", component:HomeComponent},
    { path: "angular", component:AngularComponent},
    { path: "node", component:NodeComponent},
    { path: "php", component:PhpComponent},
    { path: "oracle-sql", component:OracleSqlComponent},
    { path: "magento", component:MagentoComponent},
    { path: "java", component:JavaComponent},
    { path: "web-promotion", component:WebPromotionComponent},
    { path: "web-development", component:WebDevelopmentComponent},
    { path: "wordpress", component:WordpressComponent},
    { path: "zend-framework", component:ZendFrameworkComponent},
    { path: "yii-framework", component:YiiFrameworkComponent},
    { path: "ecommerce", component:EcommerceComponent},
    { path: "drupal", component:DrupalComponent},
    { path: "dotnet", component:DotnetComponent},
    { path: "contact", component:ContactComponent},
    { path: "codeigniter", component:CodeigniterComponent},
    { path: "cake-php", component:CakePhpComponent},
    { path: "advance-java", component:AdvanceJavaComponent},
    { path: "industrial-training", component:IndustrialTrainingComponent},
    { path: "our-training", component:OurTrainingComponent},
    { path: "android", component:AndroidComponent},
    { path: "joomla", component:JoomlaComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);