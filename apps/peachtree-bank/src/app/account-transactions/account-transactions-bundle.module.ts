import { NgModule } from '@angular/core';
import { AccountsTransactionsJourneyModule } from '@backbase/accounts-transactions-journey-ang';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { PUBSUB, PubSubService } from '@backbase/foundation-ang/web-sdk';
import {
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
} from '@backbase/accounts-transactions-journey-ang';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot()],
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
        enableManageAccounts: environment.enableManageAccounts,
      },
    },
  ],
})
export class AccountsTransactionsBundleModule {}
