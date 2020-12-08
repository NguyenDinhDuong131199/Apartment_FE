import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodCatalogComponent } from './food-catalog/food-catalog.component';
import { FoodComponent } from './food/food.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      // {
      //   path: 'food-catalog',
      //   component: FoodCatalogComponent,
      // },
      // {
      //   path: 'food',
      //   component: FoodComponent,
      // }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'layout-main',
    component: LayoutMainComponent,
    children: [
      {
        path: 'food-catalog',
        component: FoodCatalogComponent,
      },
      {
        path: 'food',
        component: FoodComponent,
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
