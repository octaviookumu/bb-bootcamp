import { NgModule } from "@angular/core";
import { AccountsTransactionsJourneyModule } from "@backbase/accounts-transactions-journey-ang";
import { TemplateRegistry } from '@backbase/foundation-ang/core';

@NgModule({
    imports: [AccountsTransactionsJourneyModule.forRoot()],
    providers: [
        TemplateRegistry,
    ],
  })
  export class AccountsTransactionsJourneyBundleModule {}