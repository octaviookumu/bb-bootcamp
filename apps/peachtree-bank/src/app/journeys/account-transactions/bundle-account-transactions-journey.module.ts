import { NgModule } from '@angular/core';
import {
  AccountsDetailsComponent,
  AccountsDetailsTabComponent,
  AccountsListComponent,
  AccountsManageComponent,
  AccountsTransactionsJourneyComponent,
  AccountsTransactionsJourneyModule,
  TransactionDetailsComponent,
  TransactionsListComponent,
} from '@backbase/accounts-transactions-journey-ang';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { PUBSUB, PubSubService } from '@backbase/foundation-ang/web-sdk';
import {
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
} from '@backbase/accounts-transactions-journey-ang';
import { Route } from '@angular/router';

const customRoute: Route = {
  path: '',
  component: AccountsTransactionsJourneyComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'list',
      component: AccountsListComponent,
      data: { title: 'My Accounts' },
    },
    {
      path: 'manage',
      component: AccountsManageComponent,
    },
    {
      path: 'transactions',
      component: AccountsDetailsTabComponent,
      data: { title: 'Transactions' }, // change title from link to Transactions
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        {
          path: 'list',
          component: TransactionsListComponent,
          data: { title: 'Transactions' },
          children: [
            {
              path: 'detail',
              component: TransactionDetailsComponent,
            },
          ],
        },
        {
          path: 'details',
          component: AccountsDetailsComponent,
          data: { title: 'Details' },
        },
      ],
    },
  ],
};

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot({ route: customRoute })],
  providers: [
    TemplateRegistry,
    // solves the pubsub error
    {
      provide: PUBSUB,
      useExisting: PubSubService,
    },
    // solves the pubsub error
    {
      provide: AccountsTransactionsJourneyConfigurationToken,
      useValue: <Partial<AccountsTransactionsJourneyConfiguration>>{
        enableManageAccounts: true, // toggle manage accounts
      },
    },
  ],
})
export class AccountsTransactionsBundleModule {}
