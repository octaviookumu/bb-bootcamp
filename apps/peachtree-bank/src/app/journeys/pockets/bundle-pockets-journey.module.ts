import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
// import { PocketsApiModule } from '../../../../../libs/pockets-api/src/lib/pockets-api.module';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { PocketsJourneyComponent } from '../../../../../../libs/pockets-journey/components/pockets/pockets.component';
import { ButtonModule } from '@backbase/ui-ang';
import { PocketsListComponent } from '../../../../../../libs/pockets-journey/components/pockets-list/pockets-list.component';
import { PocketDetailsComponent } from '../../../../../../libs/pockets-journey/components/pocket-details/pocket-details.component';
import { CommonModule } from '@angular/common';
import { ProgressbarModule } from '@backbase/ui-ang';
import { PocketSvgComponent } from '../../../../../../libs/pockets-journey/components/pocket-svg/pocket-svg.component';
// import { PUBSUB, PubSubService } from '@backbase/foundation-ang/web-sdk';

const customRoutes: Route[] = [
  {
    path: '',
    component: PocketsJourneyComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: PocketsListComponent
      },
      {
        path: 'details/:id',
        component: PocketDetailsComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    PocketsJourneyComponent,
    PocketsListComponent,
    PocketDetailsComponent,
    PocketSvgComponent,
  ],
  imports: [
    ButtonModule,
    CommonModule,
    ProgressbarModule,
    RouterModule.forChild(customRoutes),
  ],
  providers: [TemplateRegistry],
  exports: [PocketsJourneyComponent, PocketsListComponent],
})
export class PocketsJourneyBundleModule {}
