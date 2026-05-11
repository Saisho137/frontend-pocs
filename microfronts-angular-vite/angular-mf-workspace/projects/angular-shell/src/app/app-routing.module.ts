import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('shoppingMf/ProductsModule').then((m) => m.ProductsModule),
  },
  {
    path: 'clean',
    loadChildren: () =>
      import('cleanArch/MainModule').then((module) => module.MainModule),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('paymentMf/PaymentComponent').then((c) => c.PaymentComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
