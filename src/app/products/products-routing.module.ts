import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

const routes: Routes = [
   {
      path: '',
      component: BasicPageComponent
   },
   {
      path: 'numbers',
      component: NumbersPageComponent
   },
   {
      path: 'uncommon',
      component: UncommonPageComponent
   },
   {
      path: 'custom',
      component: OrderPageComponent
   },
   {
      path: '**',
      redirectTo: ''
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
