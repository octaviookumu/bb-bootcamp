import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-accounts',
  },
  {
    path: 'my-accounts',
    loadChildren: () =>
      import('./account-transactions/account-transactions-bundle.module').then(
        (m) => m.AccountsTransactionsJourneyBundleModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'my-accounts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
