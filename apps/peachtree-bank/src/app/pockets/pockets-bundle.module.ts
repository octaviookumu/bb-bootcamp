import { NgModule } from '@angular/core';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
// import { PUBSUB, PubSubService } from '@backbase/foundation-ang/web-sdk';


// const customRoute: Route = {
//   path: '',
//   component: AccountsTransactionsJourneyComponent,
//   children: [
//     {
//       path: '',
//       redirectTo: 'list',
//       pathMatch: 'full',
//     },
//     {
//       path: 'list',
//       component: AccountsListComponent,
//       data: { title: 'My Accounts' },
//     },
//     {
//       path: 'manage',
//       component: AccountsManageComponent,
//     },
//     {
//       path: 'transactions',
//       component: AccountsDetailsTabComponent,
//       data: { title: 'Transactions' }, // change title from link to Transactions
//       children: [
//         { path: '', redirectTo: 'list', pathMatch: 'full' },
//         {
//           path: 'list',
//           component: TransactionsListComponent,
//           data: { title: 'Transactions' },
//           children: [
//             {
//               path: 'detail',
//               component: TransactionDetailsComponent,
//             },
//           ],
//         },
//         {
//           path: 'details',
//           component: AccountsDetailsComponent,
//           data: { title: 'Details' },
//         },
//       ],
//     },
//   ],
// };

@NgModule({
  imports: [],
  providers: [
    TemplateRegistry,
  ],
})
export class PocketsJourneyBundleModule {}
