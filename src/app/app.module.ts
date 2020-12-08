import { RestaurantService } from './../shared/restaurant.service';
import { AreaService } from './../shared/area.service';
import { LoginService } from './../shared/login.service';
import { CreateFoodCatalogComponent } from './food-catalog/components/create-food-catalog/create-food-catalog.component';
import { FoodCatalogService } from './../shared/food-catalog.service';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { FoodCatalogComponent } from './food-catalog/food-catalog.component';
import { FoodComponent } from './food/food.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { MatCardModule } from '@angular/material/card';
import { JwtModule } from "@auth0/angular-jwt";
import { RegisterComponent } from './register/register.component';
import { UpdateFoodCatalogComponent } from './food-catalog/components/update-food-catalog/update-food-catalog.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    FoodCatalogComponent,
    FoodComponent,
    PageNotFoundComponent,
    CreateFoodCatalogComponent,
    LoginComponent,
    LayoutMainComponent,
    RegisterComponent,
    UpdateFoodCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    NgMaterialMultilevelMenuModule,
    MatTableModule,
    MatChipsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatIconModule, // input,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:4200"],
      },
    }),
    ReactiveFormsModule,

  ],
  providers: [FoodCatalogService, LoginService, AreaService, RestaurantService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
