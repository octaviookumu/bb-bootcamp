import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-accounts',
  },
  // path for transactions module
  {
    path: 'my-accounts',
    loadChildren: () =>
      import('./journeys/account-transactions/bundle-account-transactions-journey.module').then(
        (m) => m.AccountsTransactionsBundleModule
      ),
  },
  {
    path: 'pockets',
    loadChildren: () =>
      import('./journeys/pockets/bundle-pockets-journey.module').then(
        (m) => m.PocketsJourneyBundleModule
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
